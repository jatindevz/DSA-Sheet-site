'use client';

import { useEffect, useState } from 'react';
import { SURVEY_MIN_USAGE_DAYS } from '@/lib/survey-config';
import { hasMinimumUsageDays, recordFirstVisitIfNeeded } from '@/lib/survey-storage';

/** True after the user has used the app for at least SURVEY_MIN_USAGE_DAYS. */
export function useSurveyEligible(minDays: number = SURVEY_MIN_USAGE_DAYS): boolean {
  const [eligible, setEligible] = useState(false);

  useEffect(() => {
    recordFirstVisitIfNeeded();
    setEligible(hasMinimumUsageDays(minDays));
  }, [minDays]);

  return eligible;
}
