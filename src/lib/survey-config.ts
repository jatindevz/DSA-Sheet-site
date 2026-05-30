/** Show survey entry points only after this many days since first visit. */
export const SURVEY_MIN_USAGE_DAYS = 10;
export const SURVEY_REMINDER_DAYS = 30;

export const HEARD_FROM_OPTIONS = [
  { value: 'friend', label: 'Friend / classmate' },
  { value: 'reddit', label: 'Reddit' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'twitter', label: 'Twitter / X' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'whatsapp', label: 'Instagram / WhatsApp group' },
  { value: 'college', label: 'College / bootcamp' },
  { value: 'github', label: 'GitHub / open source' },
  { value: 'google', label: 'Google search' },
  { value: 'lc_gfg', label: 'LeetCode / GFG community' },
  { value: 'other', label: 'Other' },
] as const;

export const FREQUENCY_OPTIONS = [
  { value: 'daily', label: 'Daily' },
  { value: 'few_week', label: 'A few times a week' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'rarely', label: 'Rarely / first time today' },
] as const;

export const USE_CASE_OPTIONS = [
  { value: 'sheet_tracking', label: 'Tracking sheet progress' },
  { value: 'revision', label: 'Revision queue' },
  { value: 'heatmap', label: 'Activity heatmap / streaks' },
  { value: 'platform_stats', label: 'LeetCode / GFG stats' },
  { value: 'potd', label: 'Problem of the day' },
  { value: 'search', label: 'Searching problems' },
  { value: 'sync', label: 'Cloud sync across devices' },
  { value: 'exploring', label: 'Still exploring' },
] as const;

export const SHEETS_USED_OPTIONS = [
  { value: 'babbar', label: 'Love Babbar 450' },
  { value: 'patterns', label: 'DSA Patterns' },
  { value: 'striver', label: "Striver's SDE Sheet" },
  { value: 'none', label: 'None yet — browsing only' },
] as const;

export type SurveyFormData = {
  heard_from: string;
  heard_from_other?: string;
  helpfulness: number;
  frequency: string;
  use_cases: string[];
  sheets_used: string[];
  wanted_sheet?: string;
  wanted_feature?: string;
  frustration?: string;
  extra?: string;
};

export type QuickSurveyFormData = Pick<
  SurveyFormData,
  'wanted_sheet' | 'wanted_feature' | 'frustration' | 'extra'
>;

export const EMPTY_QUICK_FORM: QuickSurveyFormData = {
  wanted_sheet: '',
  wanted_feature: '',
  frustration: '',
  extra: '',
};
