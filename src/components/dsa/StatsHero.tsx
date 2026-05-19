'use client';

import { motion } from 'framer-motion';
import { Trophy, Flame, Calendar, Target } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface StatsHeroProps {
  stats?: {
    totalSolved: number;
    totalProblems: number;
    currentStreak: number;
    todayCount: number;
    accuracy: number;
  };
  isLoading?: boolean;
}

const statItems = [
  { key: 'totalSolved', label: 'Total Solved', icon: Trophy, color: '#10b981' },
  { key: 'currentStreak', label: 'Current Streak', icon: Flame, color: '#f59e0b' },
  { key: 'todayCount', label: "Today's Count", icon: Calendar, color: '#06b6d4' },
  { key: 'accuracy', label: 'Accuracy %', icon: Target, color: '#8b5cf6' },
];

export function StatsHero({ stats, isLoading }: StatsHeroProps) {
  if (isLoading) {
    return (
      <div className="glass-card-glow noise-texture p-6 col-span-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -2 }}
      transition={{ duration: 0.2 }}
      className="glass-card-glow noise-texture p-6 col-span-2"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statItems.map((item) => {
          const Icon = item.icon;
          const value = stats
            ? item.key === 'accuracy'
              ? `${stats[item.key as keyof typeof stats]}%`
              : stats[item.key as keyof typeof stats]
            : '—';
          return (
            <div
              key={item.key}
              className="glass-card-inner-glow flex flex-col items-center gap-2 p-4 rounded-xl"
            >
              <div
                className="p-2 rounded-lg"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <Icon size={20} style={{ color: item.color }} />
              </div>
              <span className="font-mono text-2xl font-bold text-foreground">
                {value?.toString()}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
