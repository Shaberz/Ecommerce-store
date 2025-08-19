import { FC } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Github, Linkedin, Youtube } from "lucide-react"

interface SocialMediaProps {
  className?: string
  iconClassName?:string
  tooltipClassName?:string
}
const socialLinks = [
  {
    title:"Youtube",
    href:"https://youtube.com/@rezatrexty",
    icon:<Youtube className="w-5 h-5"/>
  },
  {
    title:"Github",
    href:"https://github.com/shaberz",
    icon:<Github className="w-5 h-5"/>
  },
  {
    title:"Linkedin",
    href:"https://linkedin.com/in/reza-tofighi-84b2171a2",
    icon:<Linkedin className="w-5 h-5"/>
  },
]

const SocialMedia: FC<SocialMediaProps> = ({className, iconClassName, tooltipClassName}) => {
  return (
    <TooltipProvider>
      <div className={cn('flex items-center gap-2.5',className)}>
        {socialLinks?.map((item) =>(
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
              href={item?.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn('p-2 border rounded-full hover:text-white hover:border-white hoverEffect',iconClassName)}>
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className={cn('bg-lightBg text-darkColor font-semibold',tooltipClassName)}>
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}

export default SocialMedia
