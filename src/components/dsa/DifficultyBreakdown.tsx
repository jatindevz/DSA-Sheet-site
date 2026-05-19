'use client';

import { motion } from 'framer-motion';
import { CircleCheck, Minus, AlertTriangle } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface DifficultyStats {
  easy: { solved: number; total: number };
  medium: { solved: number; total: number };
  hard: { solved: number; total: number };
}

interface DifficultyBreakdownProps {
  difficulty?: DifficultyStats;
  isLoading?: boolean;
}

const difficulties = [
  {
    key: 'easy' as const,
    label: 'Easy',
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.1)',
    icon: CircleCheck,
  },
  {
    key: 'medium' as const,
    label: 'Medium',
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.1)',
    icon: Minus,
  },
  {
    key: 'hard' as const,
    label: 'Hard',
    color: '#f43f5e',
    bgColor: 'rgba(244, 63, 94, 0.1)',
    icon: AlertTriangle,
  },
];

export function DifficultyBreakdown({ difficulty, isLoading }: DifficultyBreakdownProps) {
  if (isLoading) {
    return (
      <div className="glass-card noise-texture p-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Difficulty</h3>
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-16 w-full rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  const totalSolved = difficulty
    ? difficulty.easy.solved + difficulty.medium.solved + difficulty.hard.solved
    : 0;

  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -2 }}
      transition={{ duration: 0.2 }}
      className="glass-card noise-texture p-6"
    >
      <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Difficulty</h3>
      <div className="space-y-3">
        {difficulties.map((diff) => {
          const Icon = diff.icon;
          const data = difficulty?.[diff.key];
          const solved = data?.solved ?? 0;
          const total = data?.total ?? 0;
          const percentage = total > 0 ? Math.round((solved / total) * 100) : 0;
          const share = totalSolved > 0 ? Math.round((solved / totalSolved) * 100) : 0;

          return (
            <div
              key={diff.key}
              className="rounded-xl p-3 transition-all"
              style={{ backgroundColor: diff.bgColor }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Icon size={14} style={{ color: diff.color }} />
                  <span className="text-sm font-medium" style={{ color: diff.color }}>
                    {diff.label}
                  </span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {share}%
                </span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-mono text-xl font-bold" style={{ color: diff.color }}>
                  {solved}
                </span>
                <span className="text-xs text-muted-foreground">/ {total}</span>
              </div>
              <div className="mt-2 h-1 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: diff.color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
