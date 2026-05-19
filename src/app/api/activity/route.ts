import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Get last 91 days of activity (13 weeks)
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - 90);

    const activities = await db.dailyActivity.findMany({
      where: {
        date: {
          gte: startDate.toISOString().split('T')[0],
        },
      },
      orderBy: { date: 'asc' },
    });

    const activityMap = new Map(activities.map((a) => [a.date, a.count]));

    // Build the 91-day grid
    const days: { date: string; count: number; dayOfWeek: number }[] = [];
    for (let i = 90; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      days.push({
        date: dateStr,
        count: activityMap.get(dateStr) ?? 0,
        dayOfWeek: d.getDay(),
      });
    }

    // Also compute last 7 days for streak card
    const last7Days = days.slice(-7).map((d) => ({
      date: d.date,
      count: d.count,
      dayOfWeek: d.dayOfWeek,
    }));

    return NextResponse.json({ days, last7Days });
  } catch (error) {
    console.error('Activity error:', error);
    return NextResponse.json({ error: 'Failed to fetch activity' }, { status: 500 });
  }
}
