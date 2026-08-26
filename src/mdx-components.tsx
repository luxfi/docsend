import type { MDXComponents } from 'mdx/types'
import NextLink from 'next/link'
import { Link, MDXLink } from '@hanzo/ui/primitives'

// Custom React components for MDX — anything importable can be used here,
// including components from other libraries.
//
// https://nextjs.org/docs/pages/building-your-application/configuring/mdx

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // `MDXLink` sends an internal href through the app's router and an external
    // one to a new tab. It imports no framework itself — @hanzo/ui does not
    // depend on next — so the router's link is named here, once. Without it the
    // internal case falls back to a plain anchor, which navigates correctly but
    // reloads the whole app on every in-site link.
    a: (props) => (
      <Link value={NextLink}>
        <MDXLink {...props} />
      </Link>
    ),
    ...components,
  }
}
