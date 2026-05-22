import { supabase } from './supabase';
import { UserProgress } from '@/store/dsa-store';

/**
 * Pushes the entire local storage payload for DSA progress to Supabase.
 * Should be called directly after a user successfully logs in or signs up.
 */
export async function syncLocalDataToServer(userId: string) {
  if (!supabase) return;

  try {
    const raw = localStorage.getItem('dsa-tracker-storage');
    if (!raw) return; // Nothing to sync

    const parsed = JSON.parse(raw);
    const progress = parsed?.state?.progress as Record<string, UserProgress> | undefined;

    if (!progress || Object.keys(progress).length === 0) return;

    // Convert local record into an array of DB rows
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

    // Upsert all locally solved problems to the backend
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
 * Fetches the user's progress from Supabase and populates the local Zustand store.
 */
export async function fetchServerDataToLocal(userId: string) {
  if (!supabase) return;

  const { data, error } = await supabase
    .from('dsa_progress')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    console.error('Error fetching data from Supabase:', error.message);
    return;
  }

  if (data && data.length > 0) {
    // Reconstruct the Record<string, UserProgress> object
    const newProgress: Record<string, UserProgress> = {};
    
    data.forEach(row => {
      newProgress[row.problem_title] = {
        status: row.status as 'todo' | 'solved',
        marks: row.marks,
        notes: row.notes || '',
        revisionStage: row.revision_stage,
        nextRevisionDate: row.next_revision_date,
        solvedAt: row.solved_at,
      };
    });

    // Update the Zustand store
    const { useDSAStore } = await import('@/store/dsa-store');
    useDSAStore.getState().setBulkProgress(newProgress);
    console.log('Successfully loaded cloud data to local store!');
  }
}
