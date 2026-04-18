import { IconArrowNarrowRightDashed } from "@tabler/icons-react"

export function Projects() {
  return (
    <div className="bg-card rounded-2xl py-12 px-16 border-2 border-accent-color-2">
      <div className="flex flex-row justify-between items-center">
        <p className="text-2xl font-manrope font-semibold text-text-color">Featured Projects</p>
        <button
          onClick={() => window.open("https://github.com/cladamos", "_blank")}
          className="text-text-secondary-color font-inter text-md cursor-pointer active:translate-y-0.5"
        >
          <div className="flex flex-row gap-2 items-center underline underline-offset-2">
            View All
            <IconArrowNarrowRightDashed size={20} />
          </div>
        </button>
      </div>
    </div>
  )
}
