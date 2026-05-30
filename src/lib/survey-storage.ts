/** Set when user completes the full 2-step floating survey (not profile quick feedback). */
const FULL_SURVEY_KEY = 'dsa-trackme-full-survey-done';
const LEGACY_SUBMITTED_KEY = 'dsa-trackme-survey-submitted';
const DISMISSED_UNTIL_KEY = 'dsa-trackme-survey-dismissed-until';
const FIRST_VISIT_KEY = 'dsa-trackme-first-visit';

export function recordFirstVisitIfNeeded(): void {
  if (typeof window === 'undefined') return;
  if (!localStorage.getItem(FIRST_VISIT_KEY)) {
    localStorage.setItem(FIRST_VISIT_KEY, new Date().toISOString());
  }
}

export function getDaysSinceFirstVisit(): number {
  if (typeof window === 'undefined') return 0;
  recordFirstVisitIfNeeded();
  const raw = localStorage.getItem(FIRST_VISIT_KEY);
  if (!raw) return 0;
  const first = Date.parse(raw);
  if (Number.isNaN(first)) return 0;
  return Math.floor((Date.now() - first) / (1000 * 60 * 60 * 24));
}

export function hasMinimumUsageDays(minDays: number): boolean {
  return getDaysSinceFirstVisit() >= minDays;
}

export function isSurveySubmitted(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(FULL_SURVEY_KEY) === 'true';
}

export function markSurveySubmitted(): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(FULL_SURVEY_KEY, 'true');
  localStorage.removeItem(LEGACY_SUBMITTED_KEY);
  localStorage.removeItem(DISMISSED_UNTIL_KEY);
}

export function getDismissedUntil(): number | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(DISMISSED_UNTIL_KEY);
  if (!raw) return null;
  const ts = Date.parse(raw);
  return Number.isNaN(ts) ? null : ts;
}

export function dismissSurveyForDays(days: number): void {
  if (typeof window === 'undefined') return;
  const until = new Date();
  until.setDate(until.getDate() + days);
  localStorage.setItem(DISMISSED_UNTIL_KEY, until.toISOString());
}

export function shouldShowSurveyPrompt(minUsageDays: number): boolean {
  if (isSurveySubmitted()) return false;
  if (!hasMinimumUsageDays(minUsageDays)) return false;
  const dismissedUntil = getDismissedUntil();
  if (dismissedUntil && Date.now() < dismissedUntil) return false;
  return true;
}
