import { IconArrowNarrowRightDashed } from "@tabler/icons-react"
import { ProjectCard } from "./ProjectCard"

export type Repo = {
  name: string
  description: string
  stars: number
  url: string
}

//TODO: pull repo stars from github api
//TODO: add tags
var repos: Repo[] = [
  { name: "clawea", description: "weather forecast tui", stars: 52, url: "https://github.com/cladamos/clawea" },
  { name: "solcl", description: "solar system visualization tui", stars: 52, url: "https://github.com/cladamos/solcl" },
  { name: "clatune", description: "tuner tui", stars: 52, url: "https://github.com/cladamos/clatune" },
  { name: "clakter", description: "simple dnd tool", stars: 52, url: "https://github.com/cladamos/clakter" },
]

export function Projects() {
  return (
    <div className="bg-card rounded-2xl py-12 px-6 md:px-16 border-2 border-accent-color-2">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <p className="text-2xl font-manrope font-semibold text-text-color">Featured Projects</p>
        <button
          onClick={() => window.open("https://github.com/cladamos", "_blank")}
          className="text-text-secondary-color font-inter text-md cursor-pointer active:translate-y-0.5"
        >
          <div className="hidden md:flex flex-row gap-2 items-center underline underline-offset-2">
            View All
            <IconArrowNarrowRightDashed size={20} />
          </div>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {repos.map((repo) => (
          <ProjectCard repo={repo} />
        ))}
      </div>
    </div>
  )
}
