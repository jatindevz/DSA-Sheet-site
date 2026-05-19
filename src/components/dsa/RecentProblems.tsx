'use client';

import { motion } from 'framer-motion';
import { Clock, Star, ExternalLink, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

interface Problem {
  id: string;
  title: string;
  difficulty: string;
  platform: string;
  status: string;
  url: string | null;
  articleUrl: string | null;
  marks: number;
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
        <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Recent Solves</h3>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-12 w-full rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  // Filter to show solved problems first, sorted by solvedAt desc
  const solvedProblems = (problems ?? [])
    .filter((p) => p.status === 'solved' && p.solvedAt)
    .sort((a, b) => new Date(b.solvedAt!).getTime() - new Date(a.solvedAt!).getTime())
    .slice(0, 8);

  return (
    <motion.div
      whileHover={{ scale: 1.005, y: -2 }}
      transition={{ duration: 0.2 }}
      className="glass-card noise-texture p-6 col-span-2"
    >
      <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Recent Solves</h3>
      <div className="max-h-64 overflow-y-auto custom-scrollbar space-y-2 pr-1">
        {solvedProblems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
            <Clock size={24} className="mb-2 opacity-50" />
            <p className="text-sm">No problems solved yet</p>
          </div>
        ) : (
          solvedProblems.map((problem) => {
            const diff = difficultyConfig[problem.difficulty] || difficultyConfig.medium;
            return (
              <div
                key={problem.id}
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-sm shrink-0">{problem.topic?.icon || '📝'}</span>
                  <div className="min-w-0">
                    <p className="text-sm text-foreground truncate group-hover:text-emerald transition-colors font-medium">
                      {problem.title}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-muted-foreground">{problem.topic?.name}</span>
                      {problem.marks > 0 && (
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: problem.marks }).map((_, i) => (
                            <Star key={i} size={8} className="text-amber fill-amber" />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Badge
                    variant="outline"
                    className="text-[9px] px-1.5 py-0 h-4.5 border-0 font-mono hidden sm:inline-flex"
                    style={{ color: diff.color, backgroundColor: diff.bg }}
                  >
                    {problem.difficulty}
                  </Badge>

                  <div className="flex items-center gap-0.5">
                    {problem.url && (
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 text-muted-foreground hover:text-emerald hover:bg-emerald/10 rounded"
                      >
                        <a href={problem.url} target="_blank" rel="noopener noreferrer" title="Solve on GFG">
                          <ExternalLink size={12} />
                        </a>
                      </Button>
                    )}
                    {problem.articleUrl && (
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 text-muted-foreground hover:text-cyan hover:bg-cyan/10 rounded"
                      >
                        <a href={problem.articleUrl} target="_blank" rel="noopener noreferrer" title="View Editorial">
                          <BookOpen size={12} />
                        </a>
                      </Button>
                    )}
                  </div>

                  <span className="text-[10px] text-muted-foreground font-mono w-12 text-right shrink-0">
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
