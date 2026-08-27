'use client'

import { Box } from '@hanzo/ui'
import React from 'react'
import * as Icons from 'lucide-react'
import Link from "next/link";



const ShareItem: React.FC<{
  link: string
  title: string
  icon: React.ReactNode
}>  = ({
  link,
  title,
  icon
}) => {
  return (
    <>
      <Box
        className='w-full rounded-sm hover:bg-[#F0F0F0]/10 cursor-pointer py-2'
        style={{transition: 'transform 0.25s cubic-bezier(0, 0.2, 0.5, 3) 0s'}}
      >
        <Link href={link}>
          <Box className='grid grid-flow-col auto-cols-auto justify-between px-2'>
            <Box className='grid grid-flow-col auto-cols-auto gap-4 items-center'>
              {icon}
              <Box tag="p" className='text-white'>{title}</Box>
            </Box>
            <Icons.ArrowRight className='my-auto'/>
          </Box>
        </Link>
      </Box>
    </>
  )
}

export default ShareItem
