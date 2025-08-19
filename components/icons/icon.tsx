/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import iconList, { IconName } from './icon-lists'
import { cn } from '@/lib/utils'


export interface IconProps {
  iconName: IconName
  className?: string
  isFill?: boolean
  onClick?: (e:any) =>void
}



const CustomIcon:FC <IconProps> = ({iconName, className, isFill, onClick}) => {
  const Icon: FC<Pick<IconProps, 'isFill'>> = iconList[iconName]
  return (
    <div 
    className={cn('w-fit, max-w-fit h-fit max-h-fit cursor-pointer flex items-center justify-center',className)}
    onClick={(e:any)=> onClick && onClick(e)}
    >
      <Icon isFill={isFill} />
    </div>
  )
}

export default CustomIcon
