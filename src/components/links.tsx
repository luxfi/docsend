import { Box } from '@hanzo/ui'
import React  from 'react'
import _links, {type ILink, type ILinks} from "@/links";
import Link from "@/components/link";

export const links = { ..._links } as ILinks

const Links = () => (<>
  <Box className='w-full'>
    {Object.keys(links).map((type) => (
      <div key={type}>
        {type !== 'General' && (
          <Box tag="h2" className='mt-8'>{type}</Box>
        )}
        {/*@ts-ignore*/}
        {(links[type] as ILink[]).map((link: ILink) => (
          <Link key={link.name} link={link}/>
        ))}

      </div>
    ))}
  </Box>
</>)

export default Links
