import { create } from "zustand";

export const initialStates = {
  page: 1,
  limit: 10,
  search: undefined,
  jobType: undefined,
  experienceLevel: undefined,
  workplaceType: undefined,
  location: undefined,
  industry: undefined,
  datePosted: undefined,
  applied: undefined,
};

export const useJobFilterationStore = create((set) => ({
  ...initialStates,

  setFilter: (key, value) =>
    set({
      [key]: value,
      page: 1,
    }),

  incrementPage: () =>
    set((state) => ({
      page: state.page + 1,
    })),

  decrementPage: () =>
    set((state) => ({
      page: Math.max(1, state.page - 1),
    })),

  setPage: (page) => set({ page }),

  setLimit: (limit) => set({ limit }),

  setSearch: (search) =>
    set({
      search,
      page: 1,
    }),

  resetFilters: () =>
    set({
      ...initialStates,
    }),
}));

