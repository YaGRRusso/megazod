'use client'

import { Alien, Atom, Robot, Trophy } from '@phosphor-icons/react'
import { FC, HTMLAttributes } from 'react'

export interface SidebarProps extends HTMLAttributes<HTMLUListElement> {}

const Sidebar: FC<SidebarProps> = ({ children, ...rest }) => {
  return (
    <ul
      className="flex flex-col gap-y-12 border-r border-primary-300 text-right"
      {...rest}
    >
      <li className="flex origin-right cursor-pointer items-center gap-6 px-8 opacity-60 transition-all hover:opacity-100">
        <div className="flex flex-col items-end">
          <strong>Use State</strong>
          <p className="text-sm text-gray-300">
            Formulário utilizando useState (padrão)
          </p>
        </div>
        <span className="text-xl text-primary">
          <Atom />
        </span>
      </li>
      <li className="-mr-[1px] flex items-center gap-6 rounded-l border-r-4 border-primary-300 bg-primary-300 bg-opacity-5 px-8 py-4">
        <div className="flex flex-col items-end">
          <strong>Zod</strong>
          <p className="text-sm text-gray-300">
            Formulário utilizando zod e react-hook-form
          </p>
        </div>
        <span className="text-xl text-primary-300">
          <Alien />
        </span>
      </li>
      <li className="flex origin-right cursor-pointer items-center gap-6 px-8 opacity-60 transition-all hover:opacity-100">
        <div className="flex flex-col items-end">
          <strong>Zod Assíncrono</strong>
          <p className="text-sm text-gray-300">
            Formulário assíncrono utilizando zod e react-hook-form
          </p>
        </div>
        <span className="text-xl text-primary">
          <Trophy />
        </span>
      </li>
      <li className="flex origin-right cursor-pointer items-center gap-6 px-8 opacity-60 transition-all hover:opacity-100">
        <div className="flex flex-col items-end">
          <strong>Megazod</strong>
          <p className="text-sm text-gray-300">
            Formulário utilizando zod, react-hook-form e imask
          </p>
        </div>
        <span className="text-xl text-primary">
          <Robot />
        </span>
      </li>
    </ul>
  )
}

Sidebar.displayName = 'Sidebar'

export default Sidebar
