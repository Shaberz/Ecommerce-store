"use client"

import CustomIcon from "@/components/icons/icon"
import Link from "next/link"

const FixedLogoHandler = () => {
  return (
    <Link href={'/'}>
      <CustomIcon iconName="logo" isFill />
    </Link>
  )
}

export default FixedLogoHandler
