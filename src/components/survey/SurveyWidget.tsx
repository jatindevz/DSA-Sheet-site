'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { MessageCircleHeart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SurveyModal } from '@/components/survey/SurveyModal';
import { SURVEY_MIN_USAGE_DAYS, SURVEY_REMINDER_DAYS } from '@/lib/survey-config';
import {
  dismissSurveyForDays,
  isSurveySubmitted,
  shouldShowSurveyPrompt,
} from '@/lib/survey-storage';
import { useSurveyEligible } from '@/hooks/use-survey-eligible';
import { cn } from '@/lib/utils';

/** Floating full survey — after 10 days of use, until first full submission. */
export function SurveyWidget() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [promptVisible, setPromptVisible] = useState(false);
  const [completionTick, setCompletionTick] = useState(0);

  const surveyEligible = useSurveyEligible(SURVEY_MIN_USAGE_DAYS);
  const fullSurveyDone = mounted && isSurveySubmitted();

  const refreshPrompt = useCallback(() => {
    if (isSurveySubmitted()) {
      setPromptVisible(false);
      return;
    }
    setPromptVisible(shouldShowSurveyPrompt(SURVEY_MIN_USAGE_DAYS));
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !surveyEligible) return;
    refreshPrompt();
  }, [mounted, surveyEligible, refreshPrompt, completionTick]);

  if (!mounted || !surveyEligible || fullSurveyDone) {
    return null;
  }

  const openSurvey = () => {
    setOpen(true);
    setPromptVisible(false);
  };

  const dismissPrompt = () => {
    dismissSurveyForDays(SURVEY_REMINDER_DAYS);
    setPromptVisible(false);
  };

  const ui = (
    <>
      {promptVisible && (
        <div
          className={cn(
            'fixed bottom-[5.25rem] right-4 sm:right-5 z-[200]',
            'w-[min(calc(100vw-2rem),20rem)]',
            'rounded-xl border border-emerald/20 bg-[#121218]/98 backdrop-blur-md shadow-xl p-3',
            'animate-in fade-in slide-in-from-bottom-2 duration-300',
          )}
          role="status"
        >
          <button
            type="button"
            onClick={dismissPrompt}
            className="absolute top-2 right-2 rounded-md p-1 text-muted-foreground hover:text-foreground hover:bg-accent/50"
            aria-label="Dismiss survey reminder"
          >
            <X className="size-3.5" />
          </button>
          <p className="text-sm font-medium pr-6">Help us improve</p>
          <p className="text-xs text-muted-foreground mt-1 mb-3">
            2-minute survey — your feedback shapes what we build next.
          </p>
          <div className="flex gap-2">
            <Button size="sm" className="flex-1 h-8 text-xs" onClick={openSurvey}>
              Take survey
            </Button>
            <Button size="sm" variant="ghost" className="h-8 text-xs" onClick={dismissPrompt}>
              Not now
            </Button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={openSurvey}
        className={cn(
          'fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-[200] cursor-pointer',
          'flex items-center gap-2 rounded-full',
          'border border-emerald-500/20 bg-black/20 backdrop-blur-sm',
          'px-3.5 py-2.5 sm:px-4',
          'text-xs sm:text-sm font-medium text-white/80',
          'shadow-[0_2px_8px_rgba(16,185,129,0.1)]',
          'transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500/40',
        )}
        aria-label="Help us improve — open survey"
      >
        <MessageCircleHeart className="size-4 shrink-0 text-pink-400" />
        <span>Help us improve</span>
      </button>

      <SurveyModal
        variant="full"
        open={open}
        onOpenChange={setOpen}
        onSubmitted={() => {
          setCompletionTick((n) => n + 1);
          setPromptVisible(false);
        }}
      />
    </>
  );

  return createPortal(ui, document.body);
}
