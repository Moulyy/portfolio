import { Theme } from "../hooks/useTheme"
import { Moon, Sun  } from 'lucide-react';

type ThemeSwitchButtonProps = {
  theme: Theme;
  onClick: () => void;
}

export default function ThemeSwitchButton({theme, onClick} : ThemeSwitchButtonProps) {
  const isDark = theme === "dark";
  return (
    <button
      className="rounded-lg hover:text-primary"
      onClick={onClick}
    >
      {isDark ? <Sun /> : <Moon /> }
    </button>
  )
}