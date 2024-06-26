import { useState } from "react";

export type Theme = 'light' | 'dark';

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  function getInitialTheme() : Theme {
    if (window && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme as Theme;
      }
    }
    return 'dark';
  };

  function toggleTheme(theme: Theme) : void {
    window.localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    setTheme(theme);
  }

  function switchTheme() {
    toggleTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return { theme, switchTheme }
}