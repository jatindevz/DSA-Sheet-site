import { supabase } from './supabase';
import { UserProgress } from '@/store/dsa-store';

/**
 * Pushes the entire local storage payload for DSA progress to Supabase.
 * Should be called directly after a user successfully logs in or signs up.
 * 
 * NOTE: Profile handles (LC/GFG usernames) are NOT synced here.
 * Supabase `user_profiles` is the single source of truth for those.
 */
export async function syncLocalDataToServer(userId: string) {
  if (!supabase) return;

  try {
    const raw = localStorage.getItem('dsa-tracker-storage');
    if (!raw) return;

    const parsed = JSON.parse(raw);
    const progress = parsed?.state?.progress as Record<string, UserProgress> | undefined;

    if (!progress || Object.keys(progress).length === 0) return;

    const upserts = Object.entries(progress).map(([problemTitle, data]) => ({
      user_id: userId,
      problem_title: problemTitle,
      status: data.status,
      marks: data.marks,
      notes: data.notes,
      revision_stage: data.revisionStage,
      next_revision_date: data.nextRevisionDate,
      solved_at: data.solvedAt,
    }));

    const { error } = await supabase
      .from('dsa_progress')
      .upsert(upserts, { onConflict: 'user_id,problem_title' });

    if (error) {
      console.error('Error syncing local data to Supabase:', error.message);
    } else {
      console.log('Successfully synced local data to Supabase!');
    }
  } catch (err) {
    console.error('Failed to parse or sync local storage:', err);
  }
}

/**
 * Fetches the user's DSA progress from Supabase and populates the local Zustand store.
 * 
 * NOTE: Profile handles are fetched separately by CodingStats via fetchUserProfile().
 */
export async function fetchServerDataToLocal(userId: string) {
  if (!supabase) return;

  const { data: progressData, error: progressError } = await supabase
    .from('dsa_progress')
    .select('*')
    .eq('user_id', userId);

  if (progressError) {
    console.error('Error fetching progress from Supabase:', progressError.message);
    return;
  }

  if (progressData && progressData.length > 0) {
    const newProgress: Record<string, UserProgress> = {};
    progressData.forEach(row => {
      newProgress[row.problem_title] = {
        status: row.status as 'todo' | 'solved',
        marks: row.marks,
        notes: row.notes || '',
        revisionStage: row.revision_stage,
        nextRevisionDate: row.next_revision_date,
        solvedAt: row.solved_at,
      };
    });

    const { useDSAStore } = await import('@/store/dsa-store');
    useDSAStore.getState().setBulkProgress(newProgress);
    console.log('Successfully loaded cloud data to local store!');
  }
}

/**
 * Fetches the user's profile row from Supabase (LC/GFG usernames).
 * Returns null if no profile exists yet.
 */
export async function fetchUserProfile(userId: string): Promise<{ lc_username: string | null; gfg_username: string | null } | null> {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('user_profiles')
    .select('lc_username, gfg_username')
    .eq('user_id', userId)
    .maybeSingle();

  if (error) {
    console.error('Error fetching user profile from Supabase:', error.message);
    return null;
  }

  return data;
}

/**
 * One-time save of platform usernames to Supabase.
 * This is called from the onboarding form and should only be called once per user.
 */
export async function saveUserProfile(userId: string, lcUsername: string | null, gfgUsername: string | null) {
  if (!supabase) return { error: 'Supabase not configured' };

  const { error } = await supabase
    .from('user_profiles')
    .upsert({
      user_id: userId,
      lc_username: lcUsername || null,
      gfg_username: gfgUsername || null,
    }, { onConflict: 'user_id' });

  if (error) {
    console.error('Error saving user profile to Supabase:', error.message);
    return { error: error.message };
  }

  return { error: null };
}
