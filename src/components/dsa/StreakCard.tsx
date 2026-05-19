'use client';

import { motion } from 'framer-motion';
import { Flame, Award } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface StreakCardProps {
  stats?: {
    currentStreak: number;
    bestStreak: number;
  };
  last7Days?: { date: string; count: number; dayOfWeek: number }[];
  isLoading?: boolean;
}

const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export function StreakCard({ stats, last7Days, isLoading }: StreakCardProps) {
  if (isLoading) {
    return (
      <div className="glass-card-glow noise-texture p-6 pulse-glow">
        <Skeleton className="h-16 w-16 rounded-2xl mx-auto mb-3" />
        <Skeleton className="h-4 w-24 mx-auto mb-4" />
        <div className="flex gap-2 justify-center">
          {[...Array(7)].map((_, i) => (
            <Skeleton key={i} className="h-8 w-8 rounded-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -2 }}
      transition={{ duration: 0.2 }}
      className="glass-card-glow noise-texture p-6 pulse-glow flex flex-col items-center"
    >
      <div className="p-3 rounded-2xl bg-emerald/10 mb-2">
        <Flame size={28} className="text-emerald" />
      </div>
      <span className="font-mono text-4xl font-bold text-foreground">
        {stats?.currentStreak ?? 0}
      </span>
      <span className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
        day streak
      </span>

      {/* Best streak */}
      <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
        <Award size={12} className="text-amber" />
        <span>Best: <span className="font-mono text-amber">{stats?.bestStreak ?? 0}</span></span>
      </div>

      {/* Last 7 days */}
      <div className="flex gap-1.5 mt-4">
        {(last7Days ?? Array.from({ length: 7 }, (_, i) => ({ date: '', count: 0, dayOfWeek: i }))).map(
          (day, i) => {
            const isActive = day.count > 0;
            return (
              <div key={i} className="flex flex-col items-center gap-1">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: isActive
                      ? 'rgba(16, 185, 129, 0.2)'
                      : 'rgba(255, 255, 255, 0.03)',
                    border: isActive
                      ? '1.5px solid rgba(16, 185, 129, 0.4)'
                      : '1.5px solid rgba(255, 255, 255, 0.06)',
                    boxShadow: isActive ? '0 0 12px rgba(16, 185, 129, 0.15)' : 'none',
                  }}
                >
                  {isActive && (
                    <div className="w-2 h-2 rounded-full bg-emerald" />
                  )}
                </div>
                <span className="text-[9px] text-muted-foreground/50">
                  {dayNames[day.dayOfWeek]}
                </span>
              </div>
            );
          }
        )}
      </div>
    </motion.div>
  );
}
