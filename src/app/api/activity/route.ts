import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startDate = new Date(today.getFullYear(), 0, 1);
    const endDate = today;

    const toDateStr = (d: Date) => {
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${y}-${m}-${day}`;
    };

    const activities = await db.dailyActivity.findMany({
      where: {
        date: {
          gte: toDateStr(startDate),
          lte: toDateStr(endDate),
        },
      },
      orderBy: { date: 'asc' },
    });

    const activityMap = new Map(activities.map((a) => [a.date, a.count]));

    const days: { date: string; count: number; dayOfWeek: number }[] = [];
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const copy = new Date(d);
      const dateStr = toDateStr(copy);
      days.push({
        date: dateStr,
        count: activityMap.get(dateStr) ?? 0,
        dayOfWeek: copy.getDay(),
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
