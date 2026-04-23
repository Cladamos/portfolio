import { useEffect, useState } from "react"
import "./index.css"
import { Info } from "./components/Info"
import { Projects } from "./components/Projects"
import { AboutMe } from "./components/AboutMe"

function App() {
  const [isMouseOver, setIsMouseOver] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget
    el.style.setProperty("--mx", `${e.clientX}px`)
    el.style.setProperty("--my", `${e.clientY}px`)
  }

  return (
    <div className="dot-bg" onMouseMove={handleMouseMove} onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
      <div className={`hidden md:flex dot-bg_glow ${isMouseOver ? "opacity-100" : "opacity-0"}`} />
      <div className="min-h-screen w-full relative z-1">
        <div className="container max-w-4xl mx-auto px-4 py-16">
          <div className="flex flex-col justify-center">
            <Info />
            {/*I don't want to showcase dotted background with using gap*/}
            <div className="bg-bg-color h-8"></div>
            <Projects />
            <div className="bg-bg-color h-8"></div>
            <AboutMe />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
