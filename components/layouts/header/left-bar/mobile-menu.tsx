"use client"
import SideBar from "@/components/side-bar/side-bar"
import { AlignLeft } from "lucide-react"
import { useState } from "react"


const MobileMenu = () => {
  const [isSideBarOpen, setIsSideBarOpen] =useState(false)
  return (
    <div>
      <button onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden" />
      </button>
      <div className="md:hidden">
        <SideBar isOpen={isSideBarOpen} onClose={()=>setIsSideBarOpen(false)}/>
      </div>
    </div>
  )
}

export default MobileMenu