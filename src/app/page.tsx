import { Box } from '@hanzo/ui'
import React from 'react'

export default function Page() {
  return (
    <Box className="grid grid-cols-1 items-center justify-center min-h-screen p-8">
      <Box tag="h1" className="text-4xl font-bold mb-4">LUX link</Box>
      <Box tag="p" className="text-lg text-gray-400 mb-8">Coming soon</Box>
      <Box tag="a" 
        href="https://lux.network" 
        className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
      >
        Learn More
      </Box>
    </Box>
  )
}
