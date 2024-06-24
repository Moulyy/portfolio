import AboutMe from "./components/AboutMe"
import AnchorMenu from "./components/AnchorMenu"
import TheTopbar from "./components/TheTopbar"

function App() {
  const itemsMenu = [
    { title: "About me", anchor: "#about-me" },
    { title: "Skills", anchor: "#skills" },
    { title: "Projects", anchor: "#projects" },
    { title: "Contact", anchor: "#contact" },
  ]
  return (
    <>
      <div className="mb-32 px-20">
        <TheTopbar />
      </div>
      <div className="px-20 flex items-start gap-5">
        <AnchorMenu items={itemsMenu} />
        <div className="flex flex-1 flex-col">
          <AboutMe />
        </div>
      </div>
    </>
  )
}

export default App
