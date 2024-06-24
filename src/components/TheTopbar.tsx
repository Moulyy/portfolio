import ThemeSwitchButton from "./ThemeSwitchButton";

export default function TheTopbar() {
  return (
    <header className="h-20 py-4">
      <div className="flex justify-between items-center">
        <span className="text-2xl ">Théo Moulart</span>
        <ThemeSwitchButton />
      </div>
    </header>
  )
}