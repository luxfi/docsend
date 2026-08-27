import { Box } from '@hanzo/ui'
import React  from 'react'
import {socials} from "@/socials";

const Socials = () => (<>
    <Box className='w-full grid grid-flow-col auto-cols-auto gap-4 justify-center my-8'>
      {socials.map((link) => (
        <Box tag="a"
          key={link.name} href={link.url} target='_blank' rel='noreferrer'
          className='hover:scale-105 cursor-pointer'
          style={{ transition: 'transform 0.25s cubic-bezier(0, 0.2, 0.5, 3) 0s'}}
        >
          {link.icon}
        </Box>
      ))}
    </Box>
  </>)


export default Socials
