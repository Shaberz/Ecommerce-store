import { FC } from 'react'
import { IconProps } from '../icon'
import Image from 'next/image'

const Logo:FC <Pick<IconProps,'isFill'>> = ({isFill}) => {
  if (isFill) return (
    <Image alt='logo' src={"/logo.png"} width={100} height={100}/>
  )
  return(
    <Image alt='logo' src={"/logo-light.png"} width={100} height={100}/>
  )
}

export default Logo
