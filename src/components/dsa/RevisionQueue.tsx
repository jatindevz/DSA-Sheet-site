'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, CheckCircle, ExternalLink, BookOpen, Star, Sparkles, Loader2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useDSAStore } from '@/store/dsa-store';

interface Problem {
  id: string;
  title: string;
  difficulty: string;
  url: string | null;
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
  const [reviewProblemId, setReviewProblemId] = useState<string | null>(null);
  const [marks, setMarks] = useState<number>(3);
  const [notes, setNotes] = useState<string>('');

  const items = allProblems?.filter((p) => {
    if (!p.nextRevisionDate || p.revisionStage >= 5) return false;
    const due = new Date(p.nextRevisionDate);
    const today = new Date();
    due.setHours(0,0,0,0);
    today.setHours(0,0,0,0);
    return due.getTime() <= today.getTime();
  }) || [];

  const activeProblem = items.find((p) => p.id === reviewProblemId);

  const handleOpenReview = (problem: Problem) => {
    setReviewProblemId(problem.id);
    setMarks(problem.marks || 3);
    setNotes(problem.notes || '');
  };

  const handleSaveReview = () => {
    if (!reviewProblemId || !activeProblem) return;
    
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

    updateProgress(reviewProblemId, {
      marks,
      notes,
      revisionStage: newStage,
      nextRevisionDate: nextDate,
    });
    setReviewProblemId(null);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.005, y: -2 }}
      transition={{ duration: 0.2 }}
      className="glass-card noise-texture p-6 col-span-2 flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
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
              ? 'bg-rose/10 text-rose font-bold filter drop-shadow-[0_0_8px_rgba(244,63,94,0.15)]'
              : 'bg-emerald/10 text-emerald'
          }`}
        >
          {items.length} Due Today
        </Badge>
      </div>

      <div className="flex-1 max-h-64 overflow-y-auto custom-scrollbar space-y-2 pr-1">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-muted-foreground text-center">
            <CheckCircle size={28} className="mb-2 text-emerald opacity-60" />
            <p className="text-sm font-medium text-foreground">All Revisions Cleared!</p>
            <p className="text-[11px] text-muted-foreground/60 max-w-[200px] mt-0.5">
              Outstanding! Your revision queue is empty. Keep solving new problems.
            </p>
          </div>
        ) : (
          items.map((item) => {
            const stage = stageConfig[item.revisionStage] || { label: 'Review', color: '#71717a', bg: 'rgba(113,113,122,0.1)', icon: '⚪' };
            const overdueDays = getOverdueDays(item.nextRevisionDate);

            return (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-all gap-3"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <span className="text-base mt-0.5 shrink-0">{item.topic?.icon || '📝'}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <p className="text-sm font-medium text-foreground truncate">{item.title}</p>
                      {overdueDays > 0 && (
                        <Badge
                          variant="outline"
                          className="text-[9px] px-1 h-4 border-0 bg-rose/10 text-rose font-mono animate-pulse"
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

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <div className="flex items-center gap-1">
                    {item.url && (
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0 text-muted-foreground hover:text-emerald hover:bg-emerald/10 rounded-lg"
                      >
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={13} />
                        </a>
                      </Button>
                    )}
                    {item.articleUrl && (
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0 text-muted-foreground hover:text-cyan hover:bg-cyan/10 rounded-lg"
                      >
                        <a href={item.articleUrl} target="_blank" rel="noopener noreferrer">
                          <BookOpen size={13} />
                        </a>
                      </Button>
                    )}
                  </div>
                  <Button
                    onClick={() => handleOpenReview(item)}
                    size="sm"
                    className="h-7 text-xs bg-emerald hover:bg-emerald/90 text-emerald-foreground font-medium px-2.5 rounded-lg"
                  >
                    Review
                  </Button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Review Dialog */}
      <Dialog open={reviewProblemId !== null} onOpenChange={(open) => !open && setReviewProblemId(null)}>
        <DialogContent className="bg-[#121216] border border-white/[0.08] text-foreground max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-foreground">
              <Sparkles className="text-amber animate-pulse" size={18} />
              Review Problem
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-xs">
              Open the problem, code it again from memory, and rate your confidence to advance to the next spaced-repetition stage.
            </DialogDescription>
          </DialogHeader>

          {activeProblem && (
            <div className="space-y-4 py-2">
              <div>
                <h4 className="text-sm font-semibold text-foreground">{activeProblem.title}</h4>
                <div className="flex gap-2 items-center mt-1 text-xs text-muted-foreground">
                  <span>{activeProblem.topic.icon} {activeProblem.topic.name}</span>
                  <span className="w-1 h-1 rounded-full bg-white/10" />
                  <span className="text-[10px] text-amber font-mono">Original rating: {activeProblem.marks}/5 ⭐</span>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-2">
                {activeProblem.url && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-white/[0.02] border-white/[0.08] hover:bg-emerald/10 hover:text-emerald hover:border-emerald/30 text-xs h-8"
                  >
                    <a href={activeProblem.url} target="_blank" rel="noopener noreferrer" className="gap-1.5">
                      Practice Problem
                      <ExternalLink size={12} />
                    </a>
                  </Button>
                )}
                {activeProblem.articleUrl && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-white/[0.02] border-white/[0.08] hover:bg-cyan/10 hover:text-cyan hover:border-cyan/30 text-xs h-8"
                  >
                    <a href={activeProblem.articleUrl} target="_blank" rel="noopener noreferrer" className="gap-1.5">
                      Read Editorial
                      <BookOpen size={12} />
                    </a>
                  </Button>
                )}
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
                          size={22}
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
                  {marks === 3 && 'Decent / Got it but slowly'}
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
                  placeholder="What did you learn during this review? Note any syntax errors or logical bugs..."
                  className="h-24 text-xs bg-white/[0.03] border-white/[0.08] text-foreground focus:border-emerald/50 focus:ring-emerald/20 resize-none"
                />
              </div>
            </div>
          )}

          <DialogFooter className="gap-2 sm:gap-0 mt-2">
            <Button
              onClick={() => setReviewProblemId(null)}
              variant="ghost"
              size="sm"
              className="text-xs h-9 border border-white/[0.08]"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSaveReview}
              size="sm"
              className="bg-emerald hover:bg-emerald/90 text-emerald-foreground text-xs gap-1.5 h-9"
            >
              <Sparkles size={14} />
              Complete Review
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
