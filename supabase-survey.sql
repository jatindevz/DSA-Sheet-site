-- Run in Supabase SQL Editor after deploying the survey feature.
-- Requires SUPABASE_SERVICE_ROLE_KEY in your Next.js env for /api/survey.

create table if not exists survey_responses (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete set null,
  heard_from text not null,
  heard_from_other text,
  helpfulness smallint not null check (helpfulness between 1 and 5),
  frequency text not null,
  use_cases jsonb not null default '[]'::jsonb,
  sheets_used jsonb not null default '[]'::jsonb,
  wanted_sheet text,
  wanted_feature text,
  frustration text,
  extra text,
  pathname text,
  created_at timestamp with time zone default now()
);

create index if not exists survey_responses_created_at_idx on survey_responses (created_at desc);
create index if not exists survey_responses_user_id_idx on survey_responses (user_id);

alter table survey_responses enable row level security;

-- No policies: clients cannot read/write directly. Inserts go through API + service role.

-- Already created the table? Run supabase-survey-migration.sql instead.
