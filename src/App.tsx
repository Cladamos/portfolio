import { useState } from "react"
import "./index.css"
import { InfoCard } from "./components/InfoCard"
import { Projects } from "./components/Projects"

function App() {
  const [isMouseOver, setIsMouseOver] = useState(false)
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget
    el.style.setProperty("--mx", `${e.clientX}px`)
    el.style.setProperty("--my", `${e.clientY}px`)
  }
  return (
    <div className="dot-bg" onMouseMove={handleMouseMove} onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
      <div className={`dot-bg_glow ${isMouseOver ? "opacity-100" : "opacity-0"}`} />
      <div className="h-screen w-screen relative z-1">
        <div className="container max-w-4xl mx-auto py-20">
          <div className="flex flex-col gap-6">
            <InfoCard />
            <Projects />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
