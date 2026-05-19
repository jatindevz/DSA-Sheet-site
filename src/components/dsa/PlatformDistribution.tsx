'use client';

import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

interface Problem {
  id: string;
  platform: string;
}

interface PlatformDistributionProps {
  problems?: Problem[];
  isLoading?: boolean;
}

const platformConfig: Record<string, { name: string; emoji: string; color: string }> = {
  leetcode: { name: 'LeetCode', emoji: '🟠', color: '#f59e0b' },
  gfg: { name: 'GFG', emoji: '🟢', color: '#10b981' },
  hackerrank: { name: 'HackerRank', emoji: '🟣', color: '#8b5cf6' },
  codeforces: { name: 'Codeforces', emoji: '🔵', color: '#06b6d4' },
  other: { name: 'Other', emoji: '⚪', color: '#71717a' },
};

export function PlatformDistribution({ problems, isLoading }: PlatformDistributionProps) {
  if (isLoading) {
    return (
      <div className="glass-card noise-texture p-6 col-span-2">
        <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Platforms</h3>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-6 w-full rounded" />
          ))}
        </div>
      </div>
    );
  }

  // Count problems by platform
  const counts: Record<string, number> = {};
  for (const p of problems ?? []) {
    counts[p.platform] = (counts[p.platform] || 0) + 1;
  }

  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  const platforms = Object.entries(platformConfig).map(([key, config]) => ({
    key,
    ...config,
    count: counts[key] || 0,
    percentage: total > 0 ? ((counts[key] || 0) / total) * 100 : 0,
  }));

  return (
    <motion.div
      whileHover={{ scale: 1.005, y: -2 }}
      transition={{ duration: 0.2 }}
      className="glass-card noise-texture p-6 col-span-2"
    >
      <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Platforms</h3>
      <div className="space-y-3">
        {platforms.map((platform) => (
          <div key={platform.key} className="flex items-center gap-3">
            <span className="text-sm shrink-0">{platform.emoji}</span>
            <span className="text-sm text-foreground w-24 shrink-0">{platform.name}</span>
            <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${platform.percentage}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{ backgroundColor: platform.color }}
              />
            </div>
            <span className="font-mono text-xs text-muted-foreground w-8 text-right shrink-0">
              {platform.count}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
