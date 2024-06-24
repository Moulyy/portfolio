import useTheme from "../hooks/useTheme"
import { Moon, Sun  } from 'lucide-react';

export default function ThemeSwitchButton() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      className="rounded-lg"
      onClick={() => toggleTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun /> : <Moon /> }
    </button>
  )
}