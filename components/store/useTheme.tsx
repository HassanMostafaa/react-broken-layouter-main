import { create } from "zustand";

type ITheme = "light" | "dark" | null;

interface ThemeState {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
}

export const useTheme = create<ThemeState>((set) => ({
  theme: null,
  setTheme: (theme: ITheme) => set({ theme }),
}));
