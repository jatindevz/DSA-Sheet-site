import { create } from 'zustand';

interface DSAStore {
  quickAddOpen: boolean;
  setQuickAddOpen: (open: boolean) => void;
  toggleQuickAdd: () => void;
}

export const useDSAStore = create<DSAStore>((set) => ({
  quickAddOpen: false,
  setQuickAddOpen: (open) => set({ quickAddOpen: open }),
  toggleQuickAdd: () => set((state) => ({ quickAddOpen: !state.quickAddOpen })),
}));
