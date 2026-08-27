'use client'

import { Box } from '@hanzo/ui'
import React, {useState} from 'react'
import ShareDialog from "@/components/share-dialog";
import {ContactDialog} from "@luxfi/ui";

// Static stub - no server action in static export
const saveToWaitlistStub = async () => {
  console.log('Waitlist signup - static mode')
  return { success: true }
}

const TopButtons = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box className='grid grid-flow-col auto-cols-auto justify-between w-full max-w-[680px]'>
      <div>
        <ShareDialog link={{name: "LUX", url: "", icon: ""}} showButton={true} />
      </div>
      <div>
        <ContactDialog
          open={open}
          onOpenChange={setOpen}
          title="Subscribe for updates"
          buttonText="Subscribe"
          byline="Stay up to date with everything important."
          action={saveToWaitlistStub}
          buttonProps={{className: 'bg-primary !text-black rounded-lg'}}
          actionEnclosure={{
            dbId: 'lux-waitlist',
            listId: 'coin',
            reply: "You're on the list."
          }}
        />
      </div>
    </Box>
  )
}

export default TopButtons
