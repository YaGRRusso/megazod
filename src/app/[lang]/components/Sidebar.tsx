'use client'

import { Sidebar, SidebarButtonProps, SidebarRootProps } from '@/components'
import { Alien, Atom, FlyingSaucer, House, Robot } from '@phosphor-icons/react'
import { FC, useState } from 'react'

const links: SidebarButtonProps[] = [
  { link: '/', icon: <House />, title: 'Home', desc: 'Tela inicial' },
  {
    link: '/usestate',
    icon: <Atom />,
    title: 'Use State',
    desc: 'Formulário simples utilizando useState hook (padrão',
  },
  {
    link: '/zod',
    icon: <Alien />,
    title: 'Zod e RHF',
    desc: 'Formulário simples utilizando zod e react-hook-form',
  },
  {
    link: '/async',
    icon: <FlyingSaucer />,
    title: 'Async Zod e RHF',
    desc: 'Formulário assíncrono simples utilizando zod e react-hook-form',
  },
  {
    link: '/megazod',
    icon: <Robot />,
    title: 'Megazod',
    desc: 'Formulário utilizando zod, react-hook-form e imask',
  },
]

export interface PageSidebarProps extends SidebarRootProps {}

const PageSidebar: FC<PageSidebarProps> = ({ children, ...rest }) => {
  const [active, setActive] = useState(0)

  return (
    <Sidebar.Root {...rest}>
      {links.map((item, index) => (
        <Sidebar.Button
          key={index}
          link={'/pt-br' + item.link}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
          active={active === index}
          onClick={() => setActive(index)}
        />
      ))}
    </Sidebar.Root>
  )
}

PageSidebar.displayName = 'Page.Sidebar'

export default PageSidebar
