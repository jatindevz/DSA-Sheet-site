'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface Topic {
  id: string;
  name: string;
  icon: string;
  color: string;
  total: number;
  solved: number;
}

interface QuickAddProps {
  topics?: Topic[];
}

export function QuickAdd({ topics }: QuickAddProps) {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState('');
  const [topicId, setTopicId] = useState('');
  const [difficulty, setDifficulty] = useState('medium');
  const [platform, setPlatform] = useState('leetcode');
  const [status, setStatus] = useState('solved');

  const mutation = useMutation({
    mutationFn: async (data: {
      title: string;
      topicId: string;
      difficulty: string;
      platform: string;
      status: string;
    }) => {
      const res = await fetch('/api/problems', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to add problem');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stats'] });
      queryClient.invalidateQueries({ queryKey: ['problems'] });
      queryClient.invalidateQueries({ queryKey: ['topics'] });
      queryClient.invalidateQueries({ queryKey: ['activity'] });
      setTitle('');
      setTopicId('');
      setDifficulty('medium');
      setPlatform('leetcode');
      setStatus('solved');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !topicId) return;
    mutation.mutate({ title: title.trim(), topicId, difficulty, platform, status });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -2 }}
      transition={{ duration: 0.2 }}
      className="glass-card-glow noise-texture p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <Plus size={16} className="text-emerald" />
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Add Problem
        </h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <Label htmlFor="title" className="text-xs text-muted-foreground">
            Title
          </Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Problem name..."
            className="mt-1 h-8 text-sm bg-white/[0.04] border-white/[0.08] focus:border-emerald/50 focus:ring-emerald/20 placeholder:text-muted-foreground/40"
          />
        </div>

        <div>
          <Label className="text-xs text-muted-foreground">Topic</Label>
          <Select value={topicId} onValueChange={setTopicId}>
            <SelectTrigger className="mt-1 h-8 text-sm bg-white/[0.04] border-white/[0.08] focus:border-emerald/50">
              <SelectValue placeholder="Select topic" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1e] border-white/[0.08]">
              {topics?.map((topic) => (
                <SelectItem key={topic.id} value={topic.id}>
                  {topic.icon} {topic.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label className="text-xs text-muted-foreground">Difficulty</Label>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger className="mt-1 h-8 text-sm bg-white/[0.04] border-white/[0.08]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1e] border-white/[0.08]">
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-xs text-muted-foreground">Platform</Label>
            <Select value={platform} onValueChange={setPlatform}>
              <SelectTrigger className="mt-1 h-8 text-sm bg-white/[0.04] border-white/[0.08]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1e] border-white/[0.08]">
                <SelectItem value="leetcode">LeetCode</SelectItem>
                <SelectItem value="gfg">GFG</SelectItem>
                <SelectItem value="hackerrank">HackerRank</SelectItem>
                <SelectItem value="codeforces">Codeforces</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label className="text-xs text-muted-foreground">Status</Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="mt-1 h-8 text-sm bg-white/[0.04] border-white/[0.08]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1e] border-white/[0.08]">
              <SelectItem value="solved">Solved</SelectItem>
              <SelectItem value="practicing">Practicing</SelectItem>
              <SelectItem value="revision">Revision</SelectItem>
              <SelectItem value="todo">To Do</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          disabled={mutation.isPending || !title.trim() || !topicId}
          className="w-full h-9 text-sm bg-emerald hover:bg-emerald/90 text-emerald-foreground"
        >
          {mutation.isPending ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <Plus size={14} />
          )}
          {mutation.isPending ? 'Adding...' : 'Add Problem'}
        </Button>
      </form>
    </motion.div>
  );
}
