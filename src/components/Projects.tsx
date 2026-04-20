import { IconArrowNarrowRightDashed } from "@tabler/icons-react"
import { ProjectCard } from "./ProjectCard"
import { useQuery } from "@tanstack/react-query"

export type Repo = {
  name: string
  description: string
  stars: number
  url: string
}

async function getRepos(): Promise<Repo[]> {
  const res = await fetch("https://api.github.com/users/cladamos/repos")
  const data = await res.json()
  const wantedRepos = data.filter(
    (repo: Repo) => repo.name === "clawea" || repo.name === "solcl" || repo.name === "clatune" || repo.name === "clakter",
  )
  var repoData: Repo[] = []
  for (const repo of wantedRepos) {
    repoData.push({
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      url: repo.html_url,
    })
  }
  repoData.sort((a, b) => b.stars - a.stars)
  return repoData
}

export function Projects() {
  const {
    data: repos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["repos"],
    queryFn: getRepos,
  })

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
        {repos && !isLoading && !isError
          ? repos.map((repo) => <ProjectCard key={repo.name} repo={repo} />)
          : Array.from({ length: 4 }).map((_, i) => <div key={i} className="bg-button rounded-2xl py-6 px-8 border-2 border-button h-20" />)}
      </div>
    </div>
  )
}
