import { create } from "zustand";
import { ThemeState } from "@/types/theme";

export const useThemeStore = create<ThemeState>((set) => ({
  darkMode: false,
  toggleDarkMode: () => {
    set((state) => {
      const newDarkMode = !state.darkMode;
      const root = window.document.documentElement;

      if (newDarkMode) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return { darkMode: newDarkMode };
    });
  },
  initializeTheme: () => {
    const savedTheme = localStorage.getItem("theme");
    const root = window.document.documentElement;

    if (savedTheme === "dark") {
      root.classList.add("dark");
      set({ darkMode: true });
    } else {
      root.classList.remove("dark");
      set({ darkMode: false });
    }
  },
}));
