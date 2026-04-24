import { IconCode, IconDice, IconMusic } from "@tabler/icons-react"

type Hobby = {
  text: string
  icon: React.ElementType
}

var hobbies: Hobby[] = [
  { text: "Coding", icon: IconCode },
  { text: "Bass", icon: IconMusic },
  { text: "TTRPG", icon: IconDice },
]

export function AboutMe() {
  return (
    <div className="bg-card rounded-2xl py-12 px-6 md:px-16 border-2 border-accent-color-3">
      <div className="flex flex-col gap-4 text-center md:text-start">
        <p className="text-2xl font-manrope font-semibold text-text-color">About Me</p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-32 justify-between">
          <p className="text-md font-inter text-text-secondary-color max-w-sm">
            I'm a computer science student at Dokuz Eylul University. Always been in love creating things, currently I'm into tui's, I am sharing my
            creations on reddit. Also I'm actively playing bass guitar. I generally spend my free time coding, playing bass or playing tabletop role
            playing games with my friends.
          </p>
          {/* TODO: create better looking cards I couldn't like that much */}
          <div className="flex flex-col gap-4 w-full">
            {hobbies.map((hobby) => (
              <div className="bg-button rounded-2xl flex flex-row gap-2 items-center">
                <div className="flex p-2 justify-center items-center bg-accent-color-3 h-full w-[20%] rounded-l-2xl">
                  <hobby.icon className="text-card" />
                </div>
                <p className="px-1 text-md font-inter font-medium text-text-secondary-color">{hobby.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
