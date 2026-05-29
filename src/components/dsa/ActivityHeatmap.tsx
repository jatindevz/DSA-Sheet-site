'use client';

import { cloneElement, useMemo, type CSSProperties } from 'react';
import { ActivityCalendar, type Activity } from 'react-activity-calendar';
import 'react-activity-calendar/tooltips.css';
import { Skeleton } from '@/components/ui/skeleton';

interface ActivityDay {
  date: string;
  count: number;
}

interface ActivityHeatmapProps {
  activity?: {
    days: ActivityDay[];
  };
  isLoading?: boolean;
}

/** Flat LeetCode/GitHub dark greens — no neon highlights */
const LC_GREEN_THEME = {
  dark: ['#2d2d2d', '#1a3d1c', '#2d5c2f', '#3d7a3f', '#4e9a51'],
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
};

const FLAT_BLOCK_STYLE: CSSProperties = {
  stroke: 'none',
  filter: 'none',
};

function countToLevel(count: number): number {
  if (count === 0) return 0;
  if (count === 1) return 1;
  if (count <= 3) return 2;
  if (count <= 6) return 3;
  return 4;
}

function formatTooltipDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function getTodayStr(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function toCalendarData(days: ActivityDay[], todayStr: string): Activity[] {
  return days
    .filter((day) => day.date <= todayStr)
    .map((day) => ({
      date: day.date,
      count: day.count,
      level: countToLevel(day.count),
    }));
}

export function ActivityHeatmap({ activity, isLoading }: ActivityHeatmapProps) {
  const todayStr = useMemo(() => getTodayStr(), []);

  const calendarData = useMemo(
    () => toCalendarData(activity?.days ?? [], todayStr),
    [activity?.days, todayStr],
  );

  if (isLoading) {
    return (
      <div className="noise-texture px-2 py-1.5 rounded-lg border border-white/[0.04]  max-w-full">
        <Skeleton className="h-[72px] w-[220px]" />
      </div>
    );
  }

  return (
    <div className="noise-texture px-2 py-1.5 rounded-lg border border-white/[0.04]  max-w-full min-w-0 self-start">
      <div className="lc-activity-calendar overflow-x-auto custom-scrollbar max-w-full">
        <ActivityCalendar
          data={calendarData}
          colorScheme="dark"
          theme={LC_GREEN_THEME}
          blockSize={11}
          blockMargin={2}
          blockRadius={1}
          fontSize={8}
          weekStart={0}
          showMonthLabels={false}
          showWeekdayLabels={['mon','tue', 'wed','thu','fri','sat', 'sun']}
          style={{ width: 'max-content', maxWidth: '100%' }}
          labels={{
            totalCount: '{{count}} problems solved in {{year}}',
            legend: { less: 'Less', more: 'More' },
          }}
          tooltips={{
            activity: {
              text: (a) =>
                a.count === 0
                  ? `No problems on ${formatTooltipDate(a.date)}`
                  : `${a.count} problem${a.count !== 1 ? 's' : ''} on ${formatTooltipDate(a.date)}`,
            },
          }}
          renderBlock={(block, a) => {
            const style = {
              ...(block.props.style as CSSProperties),
              ...FLAT_BLOCK_STYLE,
            };
            if (a.date === todayStr) {
              return cloneElement(block, {
                className: 'lc-heatmap-today',
                style: { ...style, stroke: '#f472b6', strokeWidth: 1 },
              });
            }
            return cloneElement(block, { style });
          }}
          renderColorLegend={(block) =>
            cloneElement(block, {
              style: { ...(block.props.style as CSSProperties), ...FLAT_BLOCK_STYLE },
            })
          }
        />
      </div>
    </div>
  );
}
