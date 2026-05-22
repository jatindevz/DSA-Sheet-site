import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserProgress {
  status: 'todo' | 'solved';
  marks: number;
  notes: string;
  revisionStage: number; // 0 to 5
  nextRevisionDate: string | null;
  solvedAt: string | null;
}

interface DSAStore {
  viewMode: 'topic' | 'pattern';
  setViewMode: (mode: 'topic' | 'pattern') => void;
  selectedTopicId: string | null;
  setSelectedTopicId: (topicId: string | null) => void;
  selectedPatternId: string | null;
  setSelectedPatternId: (patternId: string | null) => void;
  progress: Record<string, UserProgress>; // Key is problem title
  updateProgress: (problemTitle: string, update: Partial<UserProgress>) => void;
  setBulkProgress: (progress: Record<string, UserProgress>) => void;
  resetProgress: () => void;
}

export const useDSAStore = create<DSAStore>()(
  persist(
    (set) => ({
      viewMode: 'topic',
      setViewMode: (mode) => set({ viewMode: mode }),
      selectedTopicId: null,
      setSelectedTopicId: (topicId) => set({ selectedTopicId: topicId }),
      selectedPatternId: null,
      setSelectedPatternId: (patternId) => set({ selectedPatternId: patternId }),
      progress: {},
      updateProgress: (problemTitle, update) => {
        set((state) => {
          const existing = state.progress[problemTitle] || {
            status: 'todo',
            marks: 0,
            notes: '',
            revisionStage: 0,
            nextRevisionDate: null,
            solvedAt: null,
          };
          return {
            progress: {
              ...state.progress,
              [problemTitle]: { ...existing, ...update },
            },
          };
        });

        // Fire-and-forget sync to Supabase (Optimistic UI)
        import('@/lib/supabase').then(({ supabase }) => {
          if (!supabase) return;
          supabase.auth.getSession().then(({ data: { session } }) => {
            if (session?.user) {
              const currentState = useDSAStore.getState();
              const updatedItem = currentState.progress[problemTitle];
              if (updatedItem) {
                supabase.from('dsa_progress').upsert({
                  user_id: session.user.id,
                  problem_title: problemTitle,
                  status: updatedItem.status,
                  marks: updatedItem.marks,
                  notes: updatedItem.notes,
                  revision_stage: updatedItem.revisionStage,
                  next_revision_date: updatedItem.nextRevisionDate,
                  solved_at: updatedItem.solvedAt,
                }, { onConflict: 'user_id,problem_title' }).catch((err) => {
                  console.error('Failed to sync problem update to Supabase:', err);
                });
              }
            }
          });
        });
      },
      setBulkProgress: (progress) => set({ progress }),
      resetProgress: () => set({ progress: {} }),
    }),
    {
      name: 'dsa-tracker-storage',
    }
  )
);
