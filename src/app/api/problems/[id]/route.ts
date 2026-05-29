import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

// Helper to calculate next revision date based on stage transition
function calculateNextRevision(stage: number, baseDate: Date): { nextDate: Date | null; nextStage: number } {
  const date = new Date(baseDate);
  if (stage === 0) {
    // Brand new solve -> Day 3 review (add 3 days)
    date.setDate(date.getDate() + 3);
    return { nextDate: date, nextStage: 1 };
  } else if (stage === 1) {
    // Review 1 completed -> Day 7 review (add 4 days from day 3)
    date.setDate(date.getDate() + 4);
    return { nextDate: date, nextStage: 2 };
  } else if (stage === 2) {
    // Review 2 completed -> Day 21 review (add 14 days from day 7)
    date.setDate(date.getDate() + 14);
    return { nextDate: date, nextStage: 3 };
  } else if (stage === 3) {
    // Review 3 completed -> Day 45 review (add 24 days from day 21)
    date.setDate(date.getDate() + 24);
    return { nextDate: date, nextStage: 4 };
  } else {
    // Review 4 completed -> Mastered! (No more revisions)
    return { nextDate: null, nextStage: 5 };
  }
}

// Helper: increment DailyActivity for a given date
async function incrementDailyActivity(dateStr: string) {
  await db.dailyActivity.upsert({
    where: { date: dateStr },
    update: { count: { increment: 1 } },
    create: { date: dateStr, count: 1 },
  });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status, marks, notes, isRevisionStep } = body;

    // Check if problem exists
    const existing = await db.dSAProblem.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: 'Problem not found' }, { status: 404 });
    }

    const data: Record<string, unknown> = {};

    if (notes !== undefined) data.notes = notes;

    // Handling initial solve or normal update
    if (status !== undefined) {
      data.status = status;

      if (status === 'solved' && existing.status !== 'solved') {
        const solvedAt = new Date();
        data.solvedAt = solvedAt;
        
        // Initial Solve: Setup Stage 1 (Review 3 days from now)
        const { nextDate, nextStage } = calculateNextRevision(0, solvedAt);
        data.revisionStage = nextStage;
        data.nextRevisionDate = nextDate;
        
        if (marks !== undefined) {
          data.marks = marks;
        }

        // Initialize empty history
        data.revisionHistory = JSON.stringify([]);
      } else if (status !== 'solved' && existing.status === 'solved') {
        // Reset problem back to practicing or todo
        data.solvedAt = null;
        data.revisionStage = 0;
        data.nextRevisionDate = null;
        data.marks = 0;
        data.revisionHistory = null;
      }
    }

    // Handling spaced repetition revision step completed
    if (isRevisionStep) {
      const currentStage = existing.revisionStage;
      const solvedAt = existing.solvedAt || new Date();
      
      const { nextDate, nextStage } = calculateNextRevision(currentStage, new Date());
      data.revisionStage = nextStage;
      data.nextRevisionDate = nextDate;

      // Update status to 'solved' if it isn't already (e.g. was in revision)
      data.status = 'solved';
      
      if (marks !== undefined) {
        data.marks = marks; // Set new confidence rating
      }

      // Update history logs
      let history: any[] = [];
      try {
        history = existing.revisionHistory ? JSON.parse(existing.revisionHistory) : [];
      } catch (e) {
        history = [];
      }
      history.push({
        stage: currentStage,
        completedAt: new Date().toISOString(),
        marks: marks ?? existing.marks,
      });
      data.revisionHistory = JSON.stringify(history);
    }

    const problem = await db.dSAProblem.update({
      where: { id },
      data,
      include: {
        topic: true,
      },
    });

    // If status changed to "solved", update daily activity
    if (status === 'solved' && existing.status !== 'solved') {
      const today = new Date().toISOString().split('T')[0];
      await incrementDailyActivity(today);
    }

    // If a revision step was completed, update daily activity as well (shows active engagement)
    if (isRevisionStep) {
      const today = new Date().toISOString().split('T')[0];
      await incrementDailyActivity(today);
    }

    return NextResponse.json(problem);
  } catch (error) {
    console.error('Error updating problem:', error);
    return NextResponse.json({ error: 'Failed to update problem' }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const existing = await db.dSAProblem.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: 'Problem not found' }, { status: 404 });
    }
    await db.dSAProblem.delete({ where: { id } });
    return NextResponse.json({ message: 'Problem deleted successfully' });
  } catch (error) {
    console.error('Error deleting problem:', error);
    return NextResponse.json({ error: 'Failed to delete problem' }, { status: 500 });
  }
}
