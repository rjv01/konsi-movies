import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("movie-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("movie-theme", theme);
    set({ theme });
  },
}));