import { FC } from "react";
import { motion } from "motion/react"
import CustomIcon from "../icons/icon";
import { usePathname, useRouter } from "next/navigation";
import { X } from "lucide-react";
import Link from "next/link";
import { headerData } from "@/constants";
import SocialMedia from "../social-media/social-media";
import { useOutsideClick } from "@/hooks/user-outside-click";


interface SideProps {
  onClose: () => void;
  isOpen: boolean;
}

const SideBar:FC<SideProps> = ({isOpen, onClose}) => {
  const pathName  = usePathname()
  const router = useRouter()
  const sidebarRef =useOutsideClick<HTMLDivElement>(onClose)

  return (
    <div className={`fixed inset-y-0 left-0 z-50 bg-darkColor/50 shadow-xl hoverEffect cursor-auto w-full ${isOpen ? 'translate-x-0':'-translate-x-full'}`}>
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0.7, duration: 0.5}}
      ref={sidebarRef}
      className="min-w-72 max-w-96 bg-darkColor text-white/90 h-lvh p-10 border-r border-r-white flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <CustomIcon iconName="logo" onClick={() => {
            router.push("/")
            onClose()
          }}/>
          <button className="hoverEffect hover:text-red-500" onClick={onClose}><X /></button>
        </div>
        <div className="flex flex-col gap-5 font-semibold tracking-wide">
        {headerData?.map((items) => (
          <Link
            key={items?.title}
            href={items?.href}
            onClick={onClose}
            className={`hover:text-white/40 w-20 hoverEffect relative group ${pathName === items.href &&'text-white'}`}
          >
            {items?.title}
          </Link>
        ))}
      </div>
      <SocialMedia />
      </motion.div>
    </div>
  )
}

export default SideBar
