'use client'

import { Button } from '@coaktion/visu'
import { GithubLogo } from '@phosphor-icons/react'
import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'

export interface PageLinksProps extends HTMLAttributes<HTMLDivElement> {}

const PageLinks: FC<PageLinksProps> = ({ children, ...rest }) => {
  return (
    <div className="mt-6 flex items-center gap-4" {...rest}>
      <Link href="https://github.com/YaGRRusso/megazod" target="_blank">
        <Button.Root size="sm" ghost>
          <Button.Icon>
            <GithubLogo />
          </Button.Icon>
          Projeto
        </Button.Root>
      </Link>
    </div>
  )
}

PageLinks.displayName = 'PageLinks'

export default PageLinks
