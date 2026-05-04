import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext.jsx";

export function useTheme() {
  const context = useContext(ThemeContext);
  return {
    theme: context.theme,
    setTheme: context.setTheme,
    toggleTheme: context.toggleTheme,
  };
}
