'use client';

import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { useDSAStore } from '@/store/dsa-store';

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
  const { selectedTopicId, setSelectedTopicId } = useDSAStore();

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
      <div className="max-h-80 overflow-y-auto scrollbar-none space-y-3 pr-1">
        {topics?.map((topic) => {
          const progress = topic.total > 0 ? (topic.solved / topic.total) * 100 : 0;
          const isSelected = selectedTopicId === topic.id;

          return (
            <div
              key={topic.id}
              onClick={() => setSelectedTopicId(isSelected ? null : topic.id)}
              className={`group cursor-pointer p-2 -mx-2 rounded-xl transition-all ${
                isSelected
                  ? 'bg-emerald/10 border-white/[0.04] shadow-md shadow-emerald/5'
                  : 'hover:bg-white/[0.02]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm">{topic.icon}</span>
                  <span className={`text-sm transition-colors ${
                    isSelected ? 'text-emerald font-semibold' : 'text-foreground group-hover:text-emerald'
                  }`}>
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
                    background: isSelected
                      ? `linear-gradient(90deg, #10b981, #34d399)`
                      : `linear-gradient(90deg, ${topic.color}, ${topic.color}99)`,
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
