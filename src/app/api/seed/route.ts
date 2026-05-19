import { db } from '@/lib/db';
import { BABBAR_SHEET_DATA } from '@/lib/babbar-sheet-data';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    console.log('Seeding Love Babbar DSA Sheet...');

    // Clear existing data to do a fresh seed of the Love Babbar sheet
    await db.dSAProblem.deleteMany();
    await db.dSATopic.deleteMany();
    await db.dailyActivity.deleteMany();

    let totalProblemsCreated = 0;

    for (const rawTopic of BABBAR_SHEET_DATA) {
      // Create topic
      const topic = await db.dSATopic.create({
        data: {
          name: rawTopic.name,
          icon: rawTopic.icon,
          color: rawTopic.color,
          order: rawTopic.order,
        },
      });

      // Create problems for this topic
      const problemsData = rawTopic.problems.map((prob) => ({
        title: prob.title,
        difficulty: prob.difficulty,
        url: prob.url,
        articleUrl: prob.articleUrl || null,
        topicId: topic.id,
        platform: 'gfg',
        status: 'todo',
      }));

      await db.dSAProblem.createMany({
        data: problemsData,
      });

      totalProblemsCreated += problemsData.length;
    }

    return NextResponse.json({
      message: 'Love Babbar 450 Sheet seeded successfully',
      topicsCount: BABBAR_SHEET_DATA.length,
      problemsCount: totalProblemsCreated,
    });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ error: 'Failed to seed Love Babbar sheet' }, { status: 500 });
  }
}
