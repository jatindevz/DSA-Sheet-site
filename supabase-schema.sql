-- 1. Create the table to store DSA progress
create table dsa_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) not null,
  problem_title text not null,
  status text default 'todo',
  marks integer default 0,
  notes text,
  revision_stage integer default 0,
  next_revision_date timestamp with time zone,
  solved_at timestamp with time zone,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  unique (user_id, problem_title)
);

-- 2. Enable Row Level Security (RLS)
alter table dsa_progress enable row level security;

-- 3. Create policies so users can only access their own data
create policy "Users can view their own progress" on dsa_progress
  for select using (auth.uid() = user_id);

create policy "Users can insert their own progress" on dsa_progress
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own progress" on dsa_progress
  for update using (auth.uid() = user_id);

create policy "Users can delete their own progress" on dsa_progress
  for delete using (auth.uid() = user_id);

-- Optional: Function to automatically update the 'updated_at' timestamp
create or replace function update_modified_column()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

create trigger update_dsa_progress_modtime
before update on dsa_progress
for each row execute function update_modified_column();
