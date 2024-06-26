import useTheme from "../hooks/useTheme";
import ThemeSwitchButton from "./ThemeSwitchButton";

export default function TheTopbar() {
  const { theme, switchTheme } = useTheme();
  return (
    <header className="h-20 py-4">
      <div className="flex justify-between items-center">
        <span className="hidden md:block md:text-2xl ">
          <span className="font-bold text-primary">{"{{"}</span>
          <span> Théo Moulart </span>
          <span className="font-bold text-primary">{"}}"}</span>
        </span>
        <span className="flex-1 text-center md:hidden">About me</span>
        <ThemeSwitchButton theme={theme} onClick={() => switchTheme()} />
      </div>
    </header>
  )
}