'use client';

import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ActivityDay {
  date: string;
  count: number;
  dayOfWeek: number;
}

interface ActivityHeatmapProps {
  activity?: {
    days: ActivityDay[];
  };
  isLoading?: boolean;
}

function getCountColor(count: number): string {
  if (count === 0) return 'rgba(255, 255, 255, 0.03)';
  if (count === 1) return 'rgba(16, 185, 129, 0.2)';
  if (count === 2) return 'rgba(16, 185, 129, 0.4)';
  return 'rgba(16, 185, 129, 0.7)';
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function ActivityHeatmap({ activity, isLoading }: ActivityHeatmapProps) {
  if (isLoading) {
    return (
      <div className="glass-card noise-texture p-6 col-span-2">
        <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Activity</h3>
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  const days = activity?.days ?? [];

  // Organize days into weeks (columns) - each column is a week
  // We need 13 columns (weeks) x 7 rows (days)
  const weeks: ActivityDay[][] = [];
  let currentWeek: ActivityDay[] = [];

  // Pad the beginning so the first day starts on the correct day of week
  if (days.length > 0) {
    const firstDay = days[0];
    for (let i = 0; i < firstDay.dayOfWeek; i++) {
      currentWeek.push({ date: '', count: 0, dayOfWeek: i });
    }
  }

  for (const day of days) {
    currentWeek.push(day);
    if (day.dayOfWeek === 6) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  const dayLabels = ['Sun', '', 'Tue', '', 'Thu', '', 'Sat'];

  return (
    <motion.div
      whileHover={{ scale: 1.005, y: -2 }}
      transition={{ duration: 0.2 }}
      className="glass-card noise-texture p-6 col-span-2"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Activity</h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Less</span>
          {[0, 1, 2, 3].map((level) => (
            <div
              key={level}
              className="w-3 h-3 rounded-sm"
              style={{
                backgroundColor:
                  level === 0
                    ? 'rgba(255,255,255,0.03)'
                    : level === 1
                    ? 'rgba(16,185,129,0.2)'
                    : level === 2
                    ? 'rgba(16,185,129,0.4)'
                    : 'rgba(16,185,129,0.7)',
              }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
      <TooltipProvider delayDuration={100}>
        <div className="overflow-x-auto custom-scrollbar">
          <div className="flex gap-0.5">
            {/* Day labels */}
            <div className="flex flex-col gap-0.5 mr-1 shrink-0">
              {dayLabels.map((label, i) => (
                <div
                  key={i}
                  className="h-[14px] flex items-center text-[10px] text-muted-foreground/50"
                >
                  {label}
                </div>
              ))}
            </div>
            {/* Weeks */}
            {weeks.map((week, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-0.5">
                {Array.from({ length: 7 }).map((_, dayIdx) => {
                  const day = week.find((d) => d.dayOfWeek === dayIdx);
                  if (!day) {
                    return (
                      <div key={dayIdx} className="w-[14px] h-[14px]" />
                    );
                  }
                  return (
                    <Tooltip key={dayIdx}>
                      <TooltipTrigger asChild>
                        <div
                          className="heatmap-cell w-[14px] h-[14px] cursor-pointer"
                          style={{ backgroundColor: getCountColor(day.count) }}
                        />
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        className="bg-popover text-popover-foreground text-xs border border-border"
                      >
                        {day.date ? (
                          <>
                            <span className="font-medium">
                              {day.count} problem{day.count !== 1 ? 's' : ''}
                            </span>{' '}
                            on {formatDate(day.date)}
                          </>
                        ) : (
                          'No data'
                        )}
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </TooltipProvider>
    </motion.div>
  );
}
