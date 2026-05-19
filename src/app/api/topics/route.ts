import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const topics = await db.dSATopic.findMany({
      orderBy: { order: 'asc' },
      include: {
        _count: {
          select: { problems: true },
        },
        problems: {
          select: { status: true },
        },
      },
    });

    const topicsWithProgress = topics.map((topic) => {
      const total = topic._count.problems;
      const solved = topic.problems.filter((p) => p.status === 'solved').length;
      return {
        id: topic.id,
        name: topic.name,
        icon: topic.icon,
        color: topic.color,
        order: topic.order,
        total,
        solved,
      };
    });

    return NextResponse.json(topicsWithProgress);
  } catch (error) {
    console.error('Topics error:', error);
    return NextResponse.json({ error: 'Failed to fetch topics' }, { status: 500 });
  }
}
