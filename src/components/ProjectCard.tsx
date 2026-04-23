import { IconStarFilled } from "@tabler/icons-react"
import type { Repo } from "./Projects"

export function ProjectCard({ repo }: { repo: Repo }) {
  return (
    <button
      onClick={() => window.open(repo.url, "_blank")}
      className="bg-button rounded-2xl py-6 px-8 border-2 border-button hover:border-accent-color-2 cursor-pointer active:translate-y-0.5"
    >
      <div className="flex flex-col gap-2 text-start">
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl font-manrope font-semibold text-text-color">{repo.name}</p>
          <div className="flex flex-row gap-1 justify-center items-center">
            <IconStarFilled size={20} className="text-text-color" />
            <p className="text-xs font-inter text-text-color">{repo.stars}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-sm font-inter text-text-secondary-color">{repo.description}</p>
          <div className="bg-card opacity-50 rounded-full px-3 py-1">
            <p className="text-xs text-text-color">{repo.language}</p>
          </div>
        </div>
      </div>
    </button>
  )
}
