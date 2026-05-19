'use client';

import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

interface Topic {
  id: string;
  name: string;
  icon: string;
  color: string;
  total: number;
  solved: number;
}

interface TopicProgressProps {
  topics?: Topic[];
  isLoading?: boolean;
}

export function TopicProgress({ topics, isLoading }: TopicProgressProps) {
  if (isLoading) {
    return (
      <div className="glass-card noise-texture p-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Topics</h3>
        <div className="space-y-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-1.5">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-1.5 w-full" />
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
      className="glass-card noise-texture p-6"
    >
      <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Topics</h3>
      <div className="max-h-80 overflow-y-auto custom-scrollbar space-y-3 pr-1">
        {topics?.map((topic) => {
          const progress = topic.total > 0 ? (topic.solved / topic.total) * 100 : 0;
          return (
            <div key={topic.id} className="group">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm">{topic.icon}</span>
                  <span className="text-sm text-foreground group-hover:text-emerald transition-colors">
                    {topic.name}
                  </span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {topic.solved}/{topic.total}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${topic.color}, ${topic.color}99)`,
                  }}
                />
              </div>
            </div>
          );
        })}
        {(!topics || topics.length === 0) && (
          <p className="text-sm text-muted-foreground text-center py-4">No topics yet</p>
        )}
      </div>
    </motion.div>
  );
}
