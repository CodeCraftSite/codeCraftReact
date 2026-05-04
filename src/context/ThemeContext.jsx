import {
  createContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

import { localStorageGet, localStorageSet } from "../localstorage/localstorage.jsx";

const STORAGE_KEY = "theme";

export const ThemeContext = createContext(null);

function readStoredTheme() {
  const stored = localStorageGet(STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readStoredTheme);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorageSet(STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () =>
        setTheme((t) => (t === "light" ? "dark" : "light")),
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
