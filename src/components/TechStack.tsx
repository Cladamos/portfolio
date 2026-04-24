import {
  IconBrandGolang,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandVite,
  IconBubbleTea,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandGit,
} from "@tabler/icons-react"

import { TechCard } from "./TechCard"

export type Tech = {
  name: string
  Icon: React.ElementType
}

var tech: Tech[] = [
  { name: "React", Icon: IconBrandReact },
  { name: "React Native", Icon: IconBrandReactNative },
  { name: "Vite", Icon: IconBrandVite },
  { name: "Typescript", Icon: IconBrandTypescript },
  { name: "Tailwind CSS", Icon: IconBrandTailwind },
  { name: "Golang", Icon: IconBrandGolang },
  { name: "Bubbletea", Icon: IconBubbleTea },
  { name: "Git", Icon: IconBrandGit },
]

export function TechStack() {
  return (
    <div className="bg-card rounded-2xl py-12 px-6 md:px-16 border-2 border-accent-color-4">
      <p className="text-2xl font-manrope font-semibold text-text-color">Tech Stack</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
        {tech.map((t) => (
          <TechCard key={t.name} name={t.name} Icon={t.Icon} />
        ))}
      </div>
    </div>
  )
}
