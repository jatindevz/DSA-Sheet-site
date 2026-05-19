'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ExternalLink, CheckCircle, Circle, Star, Save, Loader2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDSAStore } from '@/store/dsa-store';

interface Problem {
  id: string;
  title: string;
  difficulty: string;
  status: string;
  url: string | null;
  articleUrl: string | null;
  notes: string | null;
  marks: number;
  solvedAt: string | null;
  topicId: string;
}

interface TopicProblemsProps {
  problems?: Problem[];
  isLoading?: boolean;
  topicName: string;
}

const difficultyConfig: Record<string, { color: string; bg: string }> = {
  easy: { color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
  medium: { color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' },
  hard: { color: '#f43f5e', bg: 'rgba(244, 63, 94, 0.1)' },
};

export function TopicProblems({ problems, isLoading, topicName }: TopicProblemsProps) {
  const { setSelectedTopicId, updateProgress } = useDSAStore();
  const [selectedProblemId, setSelectedProblemId] = useState<string | null>(null);
  const [tempMarks, setTempMarks] = useState<number>(0);
  const [tempNotes, setTempNotes] = useState<string>('');

  const activeProblem = problems?.find((p) => p.id === selectedProblemId);

  const handleOpenSolveDialog = (problem: Problem) => {
    setSelectedProblemId(problem.id);
    setTempMarks(problem.marks || 3);
    setTempNotes(problem.notes || '');
  };

  const handleSaveSolve = () => {
    if (!selectedProblemId) return;
    
    // Add logic for nextRevisionDate based on marks and revisionStage
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + 3); // Default Stage 1 = 3 days

    updateProgress(selectedProblemId, {
      status: 'solved',
      marks: tempMarks,
      notes: tempNotes,
      revisionStage: 1,
      nextRevisionDate: nextDate.toISOString(),
      solvedAt: new Date().toISOString(),
    });
    setSelectedProblemId(null);
  };

  const handleResetProblem = (id: string) => {
    if (confirm('Are you sure you want to reset this problem? Your solve date, marks, and revision history will be cleared.')) {
      updateProgress(id, {
        status: 'todo',
        marks: 0,
        notes: '',
        revisionStage: 0,
        nextRevisionDate: null,
        solvedAt: null,
      });
      setSelectedProblemId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="glass-card noise-texture p-6 h-full flex items-center justify-center">
        <Loader2 className="animate-spin text-emerald" size={32} />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="glass-card noise-texture p-6 col-span-2 sm:col-span-4"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Button
            onClick={() => setSelectedTopicId(null)}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground bg-white/[0.03]"
          >
            <ArrowLeft size={16} />
          </Button>
          <div>
            <h2 className="text-xl font-bold text-foreground">{topicName} Problems</h2>
            <p className="text-xs text-muted-foreground">Love Babbar 450 Sheet</p>
          </div>
        </div>
        <Badge variant="outline" className="border-emerald/30 bg-emerald/5 text-emerald font-mono">
          {problems?.filter((p) => p.status === 'solved').length} / {problems?.length} Solved
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Problems List */}
        <div className="lg:col-span-2 space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {problems?.map((problem) => {
            const isSolved = problem.status === 'solved';
            const diff = difficultyConfig[problem.difficulty] || difficultyConfig.medium;

            return (
              <div
                key={problem.id}
                onClick={() => handleOpenSolveDialog(problem)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 group ${
                  selectedProblemId === problem.id
                    ? 'bg-emerald/5 border-emerald/30 shadow-lg shadow-emerald/5'
                    : isSolved
                    ? 'bg-white/[0.02] border-white/[0.04] hover:bg-white/[0.04]'
                    : 'bg-white/[0.01] border-white/[0.03] hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="shrink-0 text-muted-foreground">
                    {isSolved ? (
                      <CheckCircle className="text-emerald fill-emerald/10" size={18} />
                    ) : (
                      <Circle className="opacity-40" size={18} />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className={`text-sm font-medium truncate ${isSolved ? 'text-foreground' : 'text-muted-foreground'} group-hover:text-foreground transition-colors`}>
                      {problem.title}
                    </p>
                    {isSolved && problem.marks > 0 && (
                      <div className="flex items-center gap-0.5 mt-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={10}
                            className={i < problem.marks ? 'text-amber fill-amber' : 'text-muted-foreground/30'}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0" onClick={(e) => e.stopPropagation()}>
                  <Badge
                    variant="outline"
                    className="text-[10px] px-1.5 py-0 h-5 border-0 font-mono hidden sm:inline-flex"
                    style={{ color: diff.color, backgroundColor: diff.bg }}
                  >
                    {problem.difficulty}
                  </Badge>

                  {/* Links */}
                  <div className="flex items-center gap-1">
                    {problem.url && (
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0 text-muted-foreground hover:text-emerald hover:bg-emerald/10 rounded-lg"
                      >
                        <a href={problem.url} target="_blank" rel="noopener noreferrer" title="Solve on GFG">
                          <ExternalLink size={14} />
                        </a>
                      </Button>
                    )}
                    {problem.articleUrl && (
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0 text-muted-foreground hover:text-cyan hover:bg-cyan/10 rounded-lg"
                      >
                        <a href={problem.articleUrl} target="_blank" rel="noopener noreferrer" title="View Article / Solution">
                          <BookOpen size={14} />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Panel (Solve / Revision Panel) */}
        <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-white/[0.06] pt-6 lg:pt-0 lg:pl-6">
          <AnimatePresence mode="wait">
            {activeProblem ? (
              <motion.div
                key={activeProblem.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm font-semibold text-foreground leading-snug">{activeProblem.title}</h4>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="text-[10px] px-1.5 py-0.5 border-0 font-mono"
                      style={{
                        color: difficultyConfig[activeProblem.difficulty]?.color,
                        backgroundColor: difficultyConfig[activeProblem.difficulty]?.bg,
                      }}
                    >
                      {activeProblem.difficulty}
                    </Badge>
                  </div>
                  
                  <div className="flex gap-2 mt-1">
                    {activeProblem.url && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 h-8 bg-emerald/10 border-emerald/30 hover:bg-emerald/20 text-emerald hover:text-emerald text-xs gap-1.5"
                      >
                        <a href={activeProblem.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={12} />
                          Solve on GFG
                        </a>
                      </Button>
                    )}
                    {activeProblem.articleUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 h-8 bg-cyan/10 border-cyan/30 hover:bg-cyan/20 text-cyan hover:text-cyan text-xs gap-1.5"
                      >
                        <a href={activeProblem.articleUrl} target="_blank" rel="noopener noreferrer">
                          <BookOpen size={12} />
                          Explanation
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider block">
                    Confidence Rating
                  </label>
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => {
                      const starVal = i + 1;
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setTempMarks(starVal)}
                          className="text-muted-foreground hover:scale-125 transition-transform"
                        >
                          <Star
                            size={22}
                            className={
                              starVal <= tempMarks
                                ? 'text-amber fill-amber filter drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]'
                                : 'text-muted-foreground/30'
                            }
                          />
                        </button>
                      );
                    })}
                  </div>
                  <span className="text-[10px] text-muted-foreground/60 italic block">
                    {tempMarks === 1 && 'Extremely Hard / Struggled'}
                    {tempMarks === 2 && 'Hard / Needed Hints'}
                    {tempMarks === 3 && 'Decent / Got it but slowly'}
                    {tempMarks === 4 && 'Good / Comfortable solution'}
                    {tempMarks === 5 && 'Mastered / Flawless speed & accuracy'}
                  </span>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider block">
                    Solution Notes
                  </label>
                  <Textarea
                    value={tempNotes}
                    onChange={(e) => setTempNotes(e.target.value)}
                    placeholder="Key intuitions, complexity analyses, potential corner cases..."
                    className="h-28 text-xs bg-white/[0.03] border-white/[0.08] focus:border-emerald/50 focus:ring-emerald/20 text-foreground resize-none"
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={handleSaveSolve}
                    size="sm"
                    className="flex-1 bg-emerald hover:bg-emerald/90 text-emerald-foreground text-xs gap-1.5 h-9"
                  >
                    <Save size={14} />
                    Mark as Solved
                  </Button>

                  {activeProblem.status === 'solved' && (
                    <Button
                      onClick={() => handleResetProblem(activeProblem.id)}
                      variant="ghost"
                      size="sm"
                      className="border border-white/[0.08] hover:bg-rose/10 hover:text-rose hover:border-rose/30 text-xs h-9 px-3"
                    >
                      Reset
                    </Button>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12 text-muted-foreground"
              >
                <CheckCircle size={32} className="mb-2 opacity-20 text-emerald" />
                <h4 className="text-sm font-medium">Select a problem</h4>
                <p className="text-xs max-w-[200px] mt-1">
                  Click any problem in the list to review details or mark it solved with your confidence level.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
