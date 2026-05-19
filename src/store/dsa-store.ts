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
  selectedTopicId: string | null;
  setSelectedTopicId: (topicId: string | null) => void;
  progress: Record<string, UserProgress>; // Key is problem title
  updateProgress: (problemTitle: string, update: Partial<UserProgress>) => void;
  resetProgress: () => void;
}

export const useDSAStore = create<DSAStore>()(
  persist(
    (set) => ({
      selectedTopicId: null,
      setSelectedTopicId: (topicId) => set({ selectedTopicId: topicId }),
      progress: {},
      updateProgress: (problemTitle, update) =>
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
        }),
      resetProgress: () => set({ progress: {} }),
    }),
    {
      name: 'dsa-tracker-storage',
    }
  )
);
