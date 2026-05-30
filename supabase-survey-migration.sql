-- Run once in Supabase SQL Editor (fixes optional sheet/feature text fields).
-- Safe to re-run.

alter table survey_responses alter column wanted_sheet drop not null;
alter table survey_responses alter column wanted_feature drop not null;

alter table survey_responses drop column if exists wanted_sheet_other;
alter table survey_responses drop column if exists wanted_feature_other;
