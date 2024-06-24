import AboutMe from "./components/AboutMe"
import AnchorMenu from "./components/AnchorMenu"
import Skills from "./components/Skills"
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
      <div className="px-4 md:px-20 fixed top-0 w-full bg-[#f8f9fa] dark:bg-dark z-10">
        <TheTopbar />
      </div>
      <div className="px-20 flex items-start gap-5 relative md:pt-32">
        <div className="hidden md:block sticky top-24">
          <AnchorMenu items={itemsMenu} />
        </div>
        <div className="flex flex-1 flex-col md:pl-10">
          <AboutMe />
          <Skills />
        </div>
      </div>
    </>
  )
}

export default App
