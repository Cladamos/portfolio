import type { Tech } from "./TechStack"

export function TechCard({ name, Icon }: Tech) {
  return (
    <div className="bg-button rounded-2xl p-3 px-6 flex flex-row gap-4 items-center hover:scale-102 transition-transform duration-100">
      <Icon className="text-text-color" />
      <p className="text-md font-inter font-medium text-text-color">{name}</p>
    </div>
  )
}
