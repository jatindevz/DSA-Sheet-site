import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const today = new Date();
    // Set to end of today to include all of today's due revisions
    today.setHours(23, 59, 59, 999);

    const dueProblems = await db.dSAProblem.findMany({
      where: {
        status: 'solved',
        revisionStage: {
          gt: 0,
          lt: 5,
        },
        nextRevisionDate: {
          lte: today,
        },
      },
      include: {
        topic: true,
      },
      orderBy: {
        nextRevisionDate: 'asc',
      },
    });

    return NextResponse.json(dueProblems);
  } catch (error) {
    console.error('Revision fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch revision items' }, { status: 500 });
  }
}
