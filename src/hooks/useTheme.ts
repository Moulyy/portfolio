import { useEffect, useState } from "react";

export type Theme = 'light' | 'dark';

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    if (window && window.localStorage) {
      window.localStorage.setItem('theme', theme);
    }

    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

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
    setTheme(theme);
    window.localStorage.setItem('theme', theme);
    document.body.classList.toggle('dark')
  }

  return { theme, toggleTheme }
}