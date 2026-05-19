import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const problems = await db.dSAProblem.findMany({
      include: { topic: true },
      orderBy: [
        { topic: { order: 'asc' } },
        { title: 'asc' },
      ],
    });
    return NextResponse.json(problems);
  } catch (error) {
    console.error('Problems GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch problems' }, { status: 500 });
  }
}
