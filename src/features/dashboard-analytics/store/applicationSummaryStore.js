import { create } from "zustand";

export const useCandidateAppSummaryStore = create((set) => ({
  editingApplicationId: undefined,
  setEditingApplicationId: (value) =>
    set((state) => ({
      editingApplicationId:
        state.editingApplicationId !== value ? value : undefined,
    })),

  viewingSummaryId: undefined,
  setViewingSummaryId: (value) =>
    set((state) => ({
      viewingSummaryId: state.viewingSummaryId !== value ? value : undefined,
    })),
}));
