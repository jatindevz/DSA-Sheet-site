'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

interface Problem {
  id: string;
  title: string;
  difficulty: string;
  platform: string;
  status: string;
  solvedAt: string | null;
  createdAt: string;
  topic: {
    name: string;
    icon: string;
    color: string;
  };
}

interface RecentProblemsProps {
  problems?: Problem[];
  isLoading?: boolean;
}

const difficultyConfig: Record<string, { color: string; bg: string }> = {
  easy: { color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
  medium: { color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' },
  hard: { color: '#f43f5e', bg: 'rgba(244, 63, 94, 0.1)' },
};

const platformIcons: Record<string, string> = {
  leetcode: '🟠',
  gfg: '🟢',
  hackerrank: '🟣',
  codeforces: '🔵',
  other: '⚪',
};

function timeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

export function RecentProblems({ problems, isLoading }: RecentProblemsProps) {
  if (isLoading) {
    return (
      <div className="glass-card noise-texture p-6 col-span-2">
        <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Recent Problems</h3>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-12 w-full rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  const recentProblems = (problems ?? []).slice(0, 8);

  return (
    <motion.div
      whileHover={{ scale: 1.005, y: -2 }}
      transition={{ duration: 0.2 }}
      className="glass-card noise-texture p-6 col-span-2"
    >
      <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Recent Problems</h3>
      <div className="max-h-64 overflow-y-auto custom-scrollbar space-y-2 pr-1">
        {recentProblems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
            <Clock size={24} className="mb-2 opacity-50" />
            <p className="text-sm">No problems solved yet</p>
          </div>
        ) : (
          recentProblems.map((problem) => {
            const diff = difficultyConfig[problem.difficulty] || difficultyConfig.medium;
            return (
              <div
                key={problem.id}
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-sm shrink-0">{problem.topic?.icon || '📝'}</span>
                  <div className="min-w-0">
                    <p className="text-sm text-foreground truncate group-hover:text-emerald transition-colors">
                      {problem.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{problem.topic?.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Badge
                    variant="outline"
                    className="text-[10px] px-1.5 py-0 h-5 border-0 font-mono"
                    style={{ color: diff.color, backgroundColor: diff.bg }}
                  >
                    {problem.difficulty}
                  </Badge>
                  <span className="text-xs">{platformIcons[problem.platform] || '⚪'}</span>
                  <span className="text-[10px] text-muted-foreground font-mono w-12 text-right">
                    {problem.solvedAt ? timeAgo(problem.solvedAt) : timeAgo(problem.createdAt)}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </motion.div>
  );
}
