import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

const DEFAULT_TOPICS = [
  { name: 'Arrays', icon: '📊', color: '#10b981', order: 1 },
  { name: 'Strings', icon: '🔤', color: '#06b6d4', order: 2 },
  { name: 'Linked Lists', icon: '🔗', color: '#8b5cf6', order: 3 },
  { name: 'Trees', icon: '🌳', color: '#f59e0b', order: 4 },
  { name: 'Graphs', icon: '🕸️', color: '#f43f5e', order: 5 },
  { name: 'Dynamic Programming', icon: '🧮', color: '#10b981', order: 6 },
  { name: 'Stack & Queue', icon: '📚', color: '#06b6d4', order: 7 },
  { name: 'Hashing', icon: '#️⃣', color: '#8b5cf6', order: 8 },
  { name: 'Sorting', icon: '🔄', color: '#f59e0b', order: 9 },
  { name: 'Binary Search', icon: '🔍', color: '#f43f5e', order: 10 },
  { name: 'Recursion', icon: '🔁', color: '#10b981', order: 11 },
  { name: 'Greedy', icon: '💰', color: '#06b6d4', order: 12 },
  { name: 'Backtracking', icon: '⬅️', color: '#8b5cf6', order: 13 },
  { name: 'Heap', icon: '⛰️', color: '#f59e0b', order: 14 },
  { name: 'Trie', icon: '🌿', color: '#f43f5e', order: 15 },
];

export async function POST() {
  try {
    const existingTopics = await db.dSATopic.count();
    if (existingTopics > 0) {
      return NextResponse.json({ message: 'Topics already seeded', count: existingTopics });
    }

    const topics = await Promise.all(
      DEFAULT_TOPICS.map((topic) =>
        db.dSATopic.create({ data: topic })
      )
    );

    return NextResponse.json({ message: 'Topics seeded successfully', count: topics.length });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ error: 'Failed to seed' }, { status: 500 });
  }
}
