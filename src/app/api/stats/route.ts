import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const totalProblems = await db.dSAProblem.count();
    const solvedProblems = await db.dSAProblem.count({ where: { status: 'solved' } });
    const easySolved = await db.dSAProblem.count({ where: { status: 'solved', difficulty: 'easy' } });
    const mediumSolved = await db.dSAProblem.count({ where: { status: 'solved', difficulty: 'medium' } });
    const hardSolved = await db.dSAProblem.count({ where: { status: 'solved', difficulty: 'hard' } });
    const easyTotal = await db.dSAProblem.count({ where: { difficulty: 'easy' } });
    const mediumTotal = await db.dSAProblem.count({ where: { difficulty: 'medium' } });
    const hardTotal = await db.dSAProblem.count({ where: { difficulty: 'hard' } });

    // Calculate pending revisions due today or overdue
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    const pendingRevisions = await db.dSAProblem.count({
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
    });

    // Calculate streak
    const todayDate = new Date();
    let currentStreak = 0;
    let bestStreak = 0;
    let tempStreak = 0;

    const allActivities = await db.dailyActivity.findMany({
      orderBy: { date: 'asc' },
    });

    const activityMap = new Map(allActivities.map((a) => [a.date, a.count]));

    // Calculate current streak from today going backwards
    const checkDate = new Date(todayDate);
    const todayStr = checkDate.toISOString().split('T')[0];
    if (!activityMap.get(todayStr)) {
      checkDate.setDate(checkDate.getDate() - 1);
    }

    while (true) {
      const dateStr = checkDate.toISOString().split('T')[0];
      const count = activityMap.get(dateStr);
      if (count && count > 0) {
        currentStreak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }

    // Calculate best streak
    for (const activity of allActivities) {
      if (activity.count > 0) {
        tempStreak++;
        bestStreak = Math.max(bestStreak, tempStreak);
      } else {
        tempStreak = 0;
      }
    }

    // Today's count
    const todayActivity = await db.dailyActivity.findUnique({
      where: { date: todayStr },
    });

    // Accuracy = solved / total * 100
    const accuracy = totalProblems > 0 ? Math.round((solvedProblems / totalProblems) * 100) : 0;

    return NextResponse.json({
      totalSolved: solvedProblems,
      totalProblems,
      currentStreak,
      bestStreak,
      todayCount: todayActivity?.count ?? 0,
      accuracy,
      pendingRevisions,
      easy: { solved: easySolved, total: easyTotal },
      medium: { solved: mediumSolved, total: mediumTotal },
      hard: { solved: hardSolved, total: hardTotal },
    });
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
