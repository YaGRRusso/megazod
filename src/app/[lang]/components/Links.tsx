'use client'

import { useThemeContext } from '@/app/contexts/theme'
import { Button } from '@coaktion/visu'
import { GithubLogo, MoonStars, Sun } from '@phosphor-icons/react'
import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'

export interface PageLinksProps extends HTMLAttributes<HTMLDivElement> {}

const PageLinks: FC<PageLinksProps> = ({ children, ...rest }) => {
  const { theme, toggleTheme } = useThemeContext()

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
      <Button.Root size="sm" ghost onClick={() => toggleTheme()}>
        <Button.Icon>{theme === 'light' ? <Sun /> : <MoonStars />}</Button.Icon>
        Tema
      </Button.Root>
    </div>
  )
}

PageLinks.displayName = 'PageLinks'

export default PageLinks
