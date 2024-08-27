import { create } from "zustand";

export const useData = create(
  (set) => ({
    state: false,
    admin: () =>  set({state: true}),
    normal: () => set({state: false}),
  })
)