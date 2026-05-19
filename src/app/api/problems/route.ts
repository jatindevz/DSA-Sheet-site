import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const problems = await db.dSAProblem.findMany({
      include: { topic: true },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(problems);
  } catch (error) {
    console.error('Problems GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch problems' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, topicId, difficulty, status, platform, url, notes } = body;

    if (!title || !topicId) {
      return NextResponse.json({ error: 'Title and topic are required' }, { status: 400 });
    }

    // Create the problem
    const problem = await db.dSAProblem.create({
      data: {
        title,
        topicId,
        difficulty: difficulty || 'medium',
        status: status || 'todo',
        platform: platform || 'leetcode',
        url: url || null,
        notes: notes || null,
        solvedAt: status === 'solved' ? new Date() : null,
      },
      include: { topic: true },
    });

    // Update daily activity if solved
    if (status === 'solved') {
      const today = new Date().toISOString().split('T')[0];
      await db.dailyActivity.upsert({
        where: { date: today },
        update: { count: { increment: 1 } },
        create: { date: today, count: 1 },
      });
    }

    return NextResponse.json(problem, { status: 201 });
  } catch (error) {
    console.error('Problems POST error:', error);
    return NextResponse.json({ error: 'Failed to create problem' }, { status: 500 });
  }
}
