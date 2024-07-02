import { createContext } from "react";
export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

interface ThemeContext {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContext>({});
