'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { supabase } from '@/lib/supabase';
import { markSurveySubmitted } from '@/lib/survey-storage';
import {
  HEARD_FROM_OPTIONS,
  FREQUENCY_OPTIONS,
  USE_CASE_OPTIONS,
  SHEETS_USED_OPTIONS,
  EMPTY_QUICK_FORM,
  type QuickSurveyFormData,
  type SurveyFormData,
} from '@/lib/survey-config';
import { Star } from 'lucide-react';

type SurveyModalProps = {
  variant?: 'full' | 'quick';
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmitted?: () => void;
};

const emptyFullForm: SurveyFormData = {
  heard_from: '',
  helpfulness: 0,
  frequency: '',
  use_cases: [],
  sheets_used: [],
};

function QuickFeedbackFields({
  form,
  setForm,
}: {
  form: QuickSurveyFormData;
  setForm: React.Dispatch<React.SetStateAction<QuickSurveyFormData>>;
}) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="wanted_sheet">
          Which sheet should we add next?{' '}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <Textarea
          id="wanted_sheet"
          rows={2}
          value={form.wanted_sheet ?? ''}
          onChange={(e) => setForm((p) => ({ ...p, wanted_sheet: e.target.value }))}
          placeholder="Paste a link or name the sheet (e.g. NeetCode 150, Blind 75…)"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="wanted_feature">
          Which feature would help most next?{' '}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <Textarea
          id="wanted_feature"
          rows={2}
          value={form.wanted_feature ?? ''}
          onChange={(e) => setForm((p) => ({ ...p, wanted_feature: e.target.value }))}
          placeholder="Recommend anything — spaced repetition, custom sheets, mobile, export…"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="frustration">
          What&apos;s most frustrating?{' '}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <Textarea
          id="frustration"
          rows={2}
          value={form.frustration ?? ''}
          onChange={(e) => setForm((p) => ({ ...p, frustration: e.target.value }))}
          placeholder="Bugs, missing links, UX…"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="extra">
          Anything else we should build?{' '}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <Textarea
          id="extra"
          rows={2}
          value={form.extra ?? ''}
          onChange={(e) => setForm((p) => ({ ...p, extra: e.target.value }))}
        />
      </div>
      <p className="text-[10px] text-muted-foreground">
        Anonymous responses are OK. We use this only to improve the app.
      </p>
    </>
  );
}

export function SurveyModal({
  variant = 'full',
  open,
  onOpenChange,
  onSubmitted,
}: SurveyModalProps) {
  const isQuick = variant === 'quick';
  const [step, setStep] = useState(1);
  const [fullForm, setFullForm] = useState<SurveyFormData>(emptyFullForm);
  const [quickForm, setQuickForm] = useState<QuickSurveyFormData>(EMPTY_QUICK_FORM);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const reset = () => {
    setStep(1);
    setFullForm(emptyFullForm);
    setQuickForm(EMPTY_QUICK_FORM);
    setError(null);
    setSubmitting(false);
    setDone(false);
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) reset();
    onOpenChange(next);
  };

  const toggleMulti = (key: 'use_cases' | 'sheets_used', value: string, max?: number) => {
    setFullForm((prev) => {
      const current = prev[key];
      if (current.includes(value)) {
        return { ...prev, [key]: current.filter((v) => v !== value) };
      }
      if (max && current.length >= max) return prev;
      return { ...prev, [key]: [...current, value] };
    });
  };

  const validateStep1 = (): string | null => {
    if (!fullForm.heard_from) return 'Please tell us how you heard about DSA Track Me.';
    if (fullForm.heard_from === 'other' && !fullForm.heard_from_other?.trim()) {
      return 'Please specify where you heard about us.';
    }
    if (fullForm.helpfulness < 1 || fullForm.helpfulness > 5) {
      return 'Please rate how helpful the app is (1–5).';
    }
    if (!fullForm.frequency) return 'Please select how often you use the app.';
    return null;
  };

  const validateStep2 = (): string | null => {
    if (fullForm.use_cases.length === 0) return 'Select at least one thing you use the app for.';
    if (fullForm.sheets_used.length === 0) return 'Select which sheets you use (or “none yet”).';
    return null;
  };

  const submit = async () => {
    if (!isQuick) {
      const err = validateStep2();
      if (err) {
        setError(err);
        return;
      }
    }

    setSubmitting(true);
    setError(null);

    let accessToken: string | undefined;
    if (supabase) {
      const { data } = await supabase.auth.getSession();
      accessToken = data.session?.access_token;
    }

    const headers: HeadersInit = { 'Content-Type': 'application/json' };
    if (accessToken) headers.Authorization = `Bearer ${accessToken}`;

    const pathname = typeof window !== 'undefined' ? window.location.pathname : undefined;

    const body = isQuick
      ? {
          survey_type: 'quick' as const,
          wanted_sheet: quickForm.wanted_sheet,
          wanted_feature: quickForm.wanted_feature,
          frustration: quickForm.frustration,
          extra: quickForm.extra,
          pathname,
        }
      : {
          survey_type: 'full' as const,
          heard_from: fullForm.heard_from,
          heard_from_other: fullForm.heard_from_other,
          helpfulness: fullForm.helpfulness,
          frequency: fullForm.frequency,
          use_cases: fullForm.use_cases,
          sheets_used: fullForm.sheets_used,
          wanted_sheet: fullForm.wanted_sheet,
          wanted_feature: fullForm.wanted_feature,
          frustration: fullForm.frustration,
          extra: fullForm.extra,
          pathname,
        };

    try {
      const res = await fetch('/api/survey', {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });

      const resBody = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(resBody?.message ?? 'Could not submit. Please try again.');
        return;
      }

      if (!isQuick) {
        markSurveySubmitted();
      }
      setDone(true);
      onSubmitted?.();
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[min(90vh,640px)] overflow-y-auto scrollbar-none gap-3 pr-5 border border-emerald-500/20">
        {done ? (
          <>
            <DialogHeader>
              <DialogTitle>Thank you!</DialogTitle>
              <DialogDescription>
                Your feedback helps us improve DSA Track Me. We read every response.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button type="button" onClick={() => handleOpenChange(false)}>
                Close
              </Button>
            </DialogFooter>
          </>
        ) : isQuick ? (
          <>
            <DialogHeader>
              <DialogTitle>Help us improve</DialogTitle>
              <DialogDescription>Share ideas anytime — all fields are optional.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-1">
              <QuickFeedbackFields form={quickForm} setForm={setQuickForm} />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <DialogFooter>
              <Button type="button" onClick={submit} disabled={submitting}>
                {submitting ? 'Submitting…' : 'Submit'}
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Help us improve</DialogTitle>
              <DialogDescription>
                Quick 2-minute survey about DSA Track Me. Step {step} of 2.
              </DialogDescription>
            </DialogHeader>
            <Progress value={step === 1 ? 50 : 100} className="h-1" />

            {step === 1 && (
              <div className="space-y-4 py-1">
                <fieldset className="space-y-2">
                  <Label asChild>
                    <legend>How did you hear about DSA Track Me?</legend>
                  </Label>
                  <RadioGroup
                    value={fullForm.heard_from}
                    onValueChange={(v) => setFullForm((p) => ({ ...p, heard_from: v }))}
                    className="gap-2"
                  >
                    {HEARD_FROM_OPTIONS.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-2 text-sm cursor-pointer rounded-md px-1 py-0.5 hover:bg-accent/50"
                      >
                        <RadioGroupItem value={opt.value} id={`heard-${opt.value}`} />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </RadioGroup>
                  {fullForm.heard_from === 'other' && (
                    <Input
                      placeholder="Please specify"
                      value={fullForm.heard_from_other ?? ''}
                      onChange={(e) => setFullForm((p) => ({ ...p, heard_from_other: e.target.value }))}
                      className="mt-2"
                    />
                  )}
                </fieldset>

                <fieldset className="space-y-2">
                  <Label>How helpful is this app for your DSA prep?</Label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        type="button"
                        aria-label={`${n} star${n > 1 ? 's' : ''}`}
                        onClick={() => setFullForm((p) => ({ ...p, helpfulness: n }))}
                        className={cn(
                          'rounded-md p-2 transition-colors hover:bg-accent/60',
                          fullForm.helpfulness >= n ? 'text-amber-400' : 'text-muted-foreground',
                        )}
                      >
                        <Star
                          className="size-6"
                          fill={fullForm.helpfulness >= n ? 'currentColor' : 'none'}
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">1 = Not at all · 5 = Extremely helpful</p>
                </fieldset>

                <fieldset className="space-y-2">
                  <Label asChild>
                    <legend>How often do you use the app?</legend>
                  </Label>
                  <RadioGroup
                    value={fullForm.frequency}
                    onValueChange={(v) => setFullForm((p) => ({ ...p, frequency: v }))}
                    className="gap-2"
                  >
                    {FREQUENCY_OPTIONS.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-2 text-sm cursor-pointer rounded-md px-1 py-0.5 hover:bg-accent/50"
                      >
                        <RadioGroupItem value={opt.value} id={`freq-${opt.value}`} />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>
            )}

            {step === 2 && (
              <div key="survey-step-2" className="space-y-4 py-1">
                <fieldset className="space-y-2">
                  <Label>What do you use most? (pick up to 3)</Label>
                  {USE_CASE_OPTIONS.map((opt) => {
                    const checked = fullForm.use_cases.includes(opt.value);
                    const atMax = fullForm.use_cases.length >= 3 && !checked;
                    return (
                      <label
                        key={opt.value}
                        className={cn(
                          'flex items-center gap-2 text-sm rounded-md px-1 py-0.5',
                          atMax ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-accent/50',
                        )}
                      >
                        <Checkbox
                          checked={checked}
                          disabled={atMax}
                          onCheckedChange={() => toggleMulti('use_cases', opt.value, 3)}
                        />
                        <span>{opt.label}</span>
                      </label>
                    );
                  })}
                </fieldset>

                <fieldset className="space-y-2">
                  <Label>Which sheets do you use?</Label>
                  {SHEETS_USED_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className="flex items-center gap-2 text-sm cursor-pointer rounded-md px-1 py-0.5 hover:bg-accent/50"
                    >
                      <Checkbox
                        checked={fullForm.sheets_used.includes(opt.value)}
                        onCheckedChange={() => toggleMulti('sheets_used', opt.value)}
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </fieldset>

                <QuickFeedbackFields
                  form={fullForm}
                  setForm={(updater) =>
                    setFullForm((prev) =>
                      typeof updater === 'function'
                        ? { ...prev, ...updater(prev) }
                        : { ...prev, ...updater },
                    )
                  }
                />
              </div>
            )}

            {error && <p className="text-sm text-destructive">{error}</p>}

            <DialogFooter className="gap-2 sm:gap-0">
              {step === 2 && (
                <Button type="button" variant="outline" onClick={() => setStep(1)} disabled={submitting}>
                  Back
                </Button>
              )}
              {step === 1 ? (
                <Button
                  type="button"
                  onClick={() => {
                    const err = validateStep1();
                    if (err) {
                      setError(err);
                      return;
                    }
                    setError(null);
                    setStep(2);
                  }}
                >
                  Next
                </Button>
              ) : (
                <Button type="button" onClick={submit} disabled={submitting}>
                  {submitting ? 'Submitting…' : 'Submit'}
                </Button>
              )}
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
