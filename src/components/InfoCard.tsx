import { IconBrandGithub, IconBrandLinkedin, IconBrandReddit } from "@tabler/icons-react"

export function InfoCard() {
  return (
    <div className="bg-card rounded-2xl py-12 px-6 md:px-16 border-2 border-accent-color">
      <div className="flex text-center md:flex-row md:text-start flex-col gap-6 justify-between items-center">
        <div className="flex flex-col gap-4">
          <p className="text-4xl font-manrope font-bold text-text-color">
            Hi, I'm <span className="text-accent-color">Gökberk</span>
          </p>
          <div className="max-w-sm">
            <p className="text-md font-inter text-text-secondary-color">
              18 y/o software developer from Turkey. Loves creating and trying new things, open sourcing tui's and creating websites with modern tech
              stack.
            </p>
          </div>
          <div className="flex flex-row gap-3 justify-center md:justify-start">
            {socialButtons.map((button) => (
              <SocialButton icon={button.icon} url={button.url} />
            ))}
          </div>
        </div>
        <div className="order-first md:order-last bg-[url('src/assets/profile.jpeg')] w-40 h-40 rounded-full bg-cover bg-position-[bottom_2rem]"></div>
      </div>
    </div>
  )
}

var socialButtons = [
  { icon: <IconBrandGithub size={20} />, url: "https://github.com/cladamos" },
  { icon: <IconBrandLinkedin size={20} />, url: "https://www.linkedin.com/in/gökberk-çalışkan" },
  { icon: <IconBrandReddit size={20} />, url: "https://www.reddit.com/user/cladamos" },
]

type SocialButtonProps = {
  icon: React.ReactNode
  url: string
}
function SocialButton({ icon, url }: SocialButtonProps) {
  return (
    <button onClick={() => window.open(url, "_blank")} className="bg-button text-text-color p-2 rounded-lg cursor-pointer active:translate-y-0.5">
      {icon}
    </button>
  )
}
