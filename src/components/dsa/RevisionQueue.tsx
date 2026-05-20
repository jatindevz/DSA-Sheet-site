'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, CheckCircle, ExternalLink, BookOpen, Star, Sparkles, Clock, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { useDSAStore } from '@/store/dsa-store';

interface Problem {
  id: string;
  title: string;
  difficulty: string;
  url: string | null;
  leetcodeUrl?: string | null;
  articleUrl: string | null;
  notes: string | null;
  marks: number;
  revisionStage: number;
  nextRevisionDate: string | null;
  solvedAt: string | null;
  topic: {
    name: string;
    icon: string;
    color: string;
  };
}

const stageConfig: Record<number, { label: string; color: string; bg: string; icon: string }> = {
  1: { label: 'Review 1 (Day 3)', color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.1)', icon: '🔵' },
  2: { label: 'Review 2 (Day 7)', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)', icon: '🟡' },
  3: { label: 'Review 3 (Day 21)', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)', icon: '🟣' },
  4: { label: 'Review 4 (Day 45)', color: '#f43f5e', bg: 'rgba(244, 63, 94, 0.1)', icon: '🔴' },
};

const difficultyConfig: Record<string, { color: string; bg: string }> = {
  easy: { color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
  medium: { color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' },
  hard: { color: '#f43f5e', bg: 'rgba(244, 63, 94, 0.1)' },
};

function getOverdueDays(dateStr: string | null): number {
  if (!dateStr) return 0;
  const due = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  due.setHours(0, 0, 0, 0);
  const diffTime = today.getTime() - due.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
}

export function RevisionQueue({ allProblems }: { allProblems?: Problem[] }) {
  const { updateProgress } = useDSAStore();
  const [selectedProblemId, setSelectedProblemId] = useState<string | null>(null);
  const [marks, setMarks] = useState<number>(3);
  const [notes, setNotes] = useState<string>('');

  const items = allProblems?.filter((p) => {
    if (!p.nextRevisionDate || p.revisionStage >= 5) return false;
    const due = new Date(p.nextRevisionDate);
    const today = new Date();
    due.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    return due.getTime() <= today.getTime();
  }) || [];

  const activeProblem = items.find((p) => p.id === selectedProblemId);

  const handleSelectProblem = (problem: Problem) => {
    setSelectedProblemId(problem.id);
    setMarks(problem.marks || 3);
    setNotes(problem.notes || '');
  };

  const handleSaveReview = () => {
    if (!selectedProblemId || !activeProblem) return;

    // Calculate new stage and next date
    const newStage = activeProblem.revisionStage + 1;
    let nextDate: string | null = null;

    if (newStage < 5) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const next = new Date(today);
      if (newStage === 2) next.setDate(today.getDate() + 4); // +4 from 3 = Day 7
      else if (newStage === 3) next.setDate(today.getDate() + 14); // +14 from 7 = Day 21
      else if (newStage === 4) next.setDate(today.getDate() + 24); // +24 from 21 = Day 45
      nextDate = next.toISOString();
    }

    updateProgress(selectedProblemId, {
      marks,
      notes,
      revisionStage: newStage,
      nextRevisionDate: nextDate,
    });
    setSelectedProblemId(null);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.002, y: -1 }}
      transition={{ duration: 0.2 }}
      className={`glass-card noise-texture p-6 col-span-2 flex flex-col transition-all duration-300 ${
        items.length === 0 ? 'min-h-[180px]' : 'min-h-[420px]'
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-emerald" />
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Revision Queue
          </h3>
        </div>
        <Badge
          variant="outline"
          className={`border-0 font-mono text-[10px] ${
            items.length > 0
              ? 'bg-rose/10 text-rose font-bold filter drop-shadow-[0_0_8px_rgba(244,63,94,0.15)] animate-pulse'
              : 'bg-emerald/10 text-emerald'
          }`}
        >
          {items.length} Due Today
        </Badge>
      </div>

      {items.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center py-6 text-muted-foreground text-center">
          <CheckCircle size={32} className="mb-2 text-emerald opacity-60" />
          <p className="text-sm font-medium text-foreground">All Revisions Cleared!</p>
          <p className="text-[11px] text-muted-foreground/60 max-w-[280px] mt-0.5">
            Outstanding! Your revision queue is empty. Keep solving new problems.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
          {/* Left column: Problems due for revision */}
          <div className="lg:col-span-2 space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            {items.map((item) => {
              const stage = stageConfig[item.revisionStage] || { label: 'Review', color: '#71717a', bg: 'rgba(113,113,122,0.1)', icon: '⚪' };
              const overdueDays = getOverdueDays(item.nextRevisionDate);
              const diff = difficultyConfig[item.difficulty] || difficultyConfig.medium;

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectProblem(item)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 group ${
                    selectedProblemId === item.id
                      ? 'bg-emerald/5 border-emerald/30 shadow-lg shadow-emerald/5'
                      : 'bg-white/[0.01] border-white/[0.03] hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-base shrink-0">{item.topic?.icon || '📝'}</span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <p className="text-sm font-medium text-foreground truncate group-hover:text-emerald transition-colors">{item.title}</p>
                        {overdueDays > 0 && (
                          <Badge
                            variant="outline"
                            className="text-[9px] px-1 h-4 border-0 bg-rose/10 text-rose font-mono"
                          >
                            {overdueDays}d overdue
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-muted-foreground">{item.topic?.name}</span>
                        <span className="w-1 h-1 rounded-full bg-white/10" />
                        <Badge
                          variant="outline"
                          className="text-[9px] px-1 h-4 border-0 font-mono"
                          style={{ color: stage.color, backgroundColor: stage.bg }}
                        >
                          {stage.icon} {stage.label}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <Badge
                      variant="outline"
                      className="text-[10px] px-1.5 py-0 h-5 border-0 font-mono hidden sm:inline-flex"
                      style={{ color: diff.color, backgroundColor: diff.bg }}
                    >
                      {item.difficulty}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right column: Action / Review Panel */}
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
                      <span className="text-[10px] text-amber font-mono font-bold">Prev rating: {activeProblem.marks}/5 ⭐</span>
                    </div>

                    <div className="flex flex-col gap-2 mt-1">
                      {/* Row 1: GFG / LC links */}
                      <div className="flex gap-2">
                        {activeProblem.leetcodeUrl && (
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="flex-1 h-8 bg-[#ffa116]/10 border-[#ffa116]/30 hover:bg-[#ffa116]/20 text-[#ffa116] hover:text-[#ffa116] text-xs gap-1.5"
                          >
                            <a href={activeProblem.leetcodeUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={12} />
                              Solve on LC
                            </a>
                          </Button>
                        )}
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
                      </div>

                      {/* Row 2: Solution Article */}
                      {activeProblem.articleUrl && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full h-8 bg-cyan/10 border-cyan/30 hover:bg-cyan/20 text-cyan hover:text-cyan text-xs gap-1.5"
                        >
                          <a href={activeProblem.articleUrl} target="_blank" rel="noopener noreferrer">
                            <BookOpen size={12} />
                            Explanation
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider block">
                      New Confidence Rating
                    </label>
                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: 5 }).map((_, i) => {
                        const starVal = i + 1;
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setMarks(starVal)}
                            className="text-muted-foreground hover:scale-125 transition-transform"
                          >
                            <Star
                              size={20}
                              className={
                                starVal <= marks
                                  ? 'text-amber fill-amber filter drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]'
                                  : 'text-muted-foreground/30'
                              }
                            />
                          </button>
                        );
                      })}
                    </div>
                    <span className="text-[10px] text-muted-foreground/60 italic block">
                      {marks === 1 && 'Extremely Hard / Struggled'}
                      {marks === 2 && 'Hard / Needed Hints'}
                      {marks === 3 && 'Decent / Got it slowly'}
                      {marks === 4 && 'Good / Comfortable solution'}
                      {marks === 5 && 'Mastered / Flawless speed & accuracy'}
                    </span>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider block">
                      Revision Notes
                    </label>
                    <Textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="intuitions, complexity analysis, potential corner cases..."
                      className="h-20 text-xs bg-white/[0.03] border-white/[0.08] text-foreground focus:border-emerald/50 focus:ring-emerald/20 resize-none"
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={handleSaveReview}
                      size="sm"
                      className="flex-1 bg-emerald hover:bg-emerald/90 text-emerald-foreground text-xs gap-1.5 h-9"
                    >
                      <Save size={14} />
                      Complete Review
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-10 text-muted-foreground"
                >
                  <Clock size={32} className="mb-2 opacity-20 text-emerald" />
                  <h4 className="text-sm font-medium">Select a revision</h4>
                  <p className="text-xs max-w-[200px] mt-1">
                    Click any problem in the revision list to review details and mark review stage complete.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </motion.div>
  );
}
