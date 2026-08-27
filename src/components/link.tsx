'use client'

import { Box } from '@hanzo/ui'
import React from 'react'
import { type ILink } from "@/links";
import Image from 'next/image'
import ShareDialog from "@/components/share-dialog";


const Link: React.FC<{
  link: ILink
}>  = ({
  link,
}) => {

  const handleShare = (event:   React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event?.preventDefault()
  }

  const url = () => {
    if (typeof window === 'undefined') return '';
    return window?.location.href.split('?')[0] + link.name
  }

  return (
    <>
      <Box
        className='w-full max-w-[680px] rounded-[14px] bg-[#222] mx-auto my-3 hover:scale-105 cursor-pointer'
        style={{transition: 'transform 0.25s cubic-bezier(0, 0.2, 0.5, 3) 0s'}}
      >
        <a href={link.url}>
          <Box className='grid grid-flow-col auto-cols-auto justify-between items-center'>
            <Box className='p-1'>
              <Image src={link.icon} alt={link.name} height={48} width={48} className='rounded-lg'/>
            </Box>
            <Box tag="p" className='text-white'>{link.name}</Box>
            <Box className='w-[56px] transition ' onClick={(event) => handleShare(event)}>
              <ShareDialog link={link}/>
            </Box>
          </Box>
        </a>
      </Box>
    </>
  )
}

export default Link
