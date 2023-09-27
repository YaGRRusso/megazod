'use client'

import { Sidebar, SidebarButtonProps, SidebarRootProps } from '@/components'
import { Alien, Atom, FlyingSaucer, House, Robot } from '@phosphor-icons/react'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

const links: SidebarButtonProps[] = [
  {
    path: '',
    icon: <House />,
    title: 'Home',
    desc: 'Tela inicial de apresentação sobre o projeto',
  },
  {
    path: '/usestate',
    icon: <Atom />,
    title: 'Use State',
    desc: 'Formulário simples utilizando useState hook (padrão)',
  },
  {
    path: '/zod',
    icon: <Alien />,
    title: 'Zod e RHF',
    desc: 'Formulário simples utilizando zod e react-hook-form',
  },
  {
    path: '/async',
    icon: <FlyingSaucer />,
    title: 'Async Zod e RHF',
    desc: 'Formulário async utilizando zod e react-hook-form',
  },
  {
    path: '/megazod',
    icon: <Robot />,
    title: 'Megazod',
    desc: 'Formulário utilizando zod, react-hook-form e imask',
  },
]

export interface PageSidebarProps extends SidebarRootProps {}

const PageSidebar: FC<PageSidebarProps> = ({ children, ...rest }) => {
  const pathname = usePathname()

  return (
    <Sidebar.Root {...rest}>
      {links.map((item, index) => (
        <Sidebar.Button
          key={index}
          path={'/pt-br' + item.path}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
          active={pathname === '/pt-br' + item.path}
        />
      ))}
    </Sidebar.Root>
  )
}

PageSidebar.displayName = 'Page.Sidebar'

export default PageSidebar
