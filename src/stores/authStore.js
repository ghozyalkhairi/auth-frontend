import { create } from "zustand"

const useAuthStore = create((set) => ({
  user: {
    name: "",
    email: "",
    token: "",
  },
  actions: {
    setUser: (user) => set({ user }),
  },
}))

export const useUser = () => useAuthStore((state) => state.user)
export const useAuthActions = () => useAuthStore((state) => state.actions)
