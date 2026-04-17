import { useState } from "react"
import "./index.css"

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
      <div className="flex h-screen w-screen items-center justify-center relative z-1">
        <p className="text-3xl font-bold underline bg-red-300">Hello World</p>
      </div>
    </div>
  )
}

export default App
