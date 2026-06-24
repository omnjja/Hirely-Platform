import { create } from "zustand";

const initialStates = {
  page: 1,
  limit: 10,
  status: undefined,
  matchScore: undefined,
};
export const useAnalysisFilterationStore = create((set) => ({
  ...initialStates,
  increamentPage: () => set((state) => ({ page: state.page + 1 })),
  decreamentPage: () => set((state) => ({ page: state.pag - 1 })),
  setStatus: (newStatus) => set(() => ({ status: newStatus })),
  setMatchScore: (newMatchScore) => set(() => ({ matchScore: newMatchScore })),
}));
