'use client'

import { Button } from '@coaktion/visu'
import { List, X } from '@phosphor-icons/react'
import clsx from 'clsx'
import { FC, HTMLAttributes, useState } from 'react'

export interface SidebarRootProps extends HTMLAttributes<HTMLUListElement> {}

const SidebarRoot: FC<SidebarRootProps> = ({ children, ...rest }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div
      className={clsx(
        'z-30 flex max-w-xs flex-[1] items-center justify-end bg-[#fff] py-16 transition-all duration-300 dark:bg-dark max-lg:fixed max-lg:left-0 max-lg:h-screen max-lg:border-r max-lg:border-primary',
        isOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full',
      )}
    >
      <div
        className={clsx(
          'absolute -right-12 top-0 transition-all lg:hidden',
          isOpen && 'pointer-events-none opacity-0',
        )}
      >
        <button
          className="flex w-12 items-center justify-center rounded-br bg-primary py-2 text-lg text-gray-100"
          onClick={() => setIsOpen(true)}
        >
          <List weight="bold" />
        </button>
      </div>
      <ul
        className="sticky bottom-12 top-12 flex w-full flex-col gap-y-4 text-right lg:border-r lg:border-primary-300"
        {...rest}
      >
        <li className="mb-4 flex w-full justify-end px-4 lg:hidden">
          <Button.Root size="sm" light onClick={() => setIsOpen(false)}>
            Fechar
            <Button.Icon>
              <X />
            </Button.Icon>
          </Button.Root>
        </li>
        {children}
      </ul>
    </div>
  )
}

SidebarRoot.displayName = 'Sidebar.Root'

export default SidebarRoot
