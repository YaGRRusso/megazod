'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { FC, HTMLAttributes, ReactNode } from 'react'

export interface SidebarButtonProps extends HTMLAttributes<HTMLLIElement> {
  link: string
  icon: ReactNode
  title: string
  desc: string
  active?: boolean
}

const SidebarButton: FC<SidebarButtonProps> = ({
  link,
  icon,
  title,
  desc,
  active,
  children,
  ...rest
}) => {
  return (
    <Link href={link}>
      <li
        className={clsx(
          'flex items-center justify-end gap-6 rounded-l py-6 pr-8',
          active
            ? '-mr-[1px] border-r-4 border-primary-300 bg-primary-300 bg-opacity-5'
            : 'origin-right cursor-pointer opacity-60 transition-all hover:opacity-100',
        )}
        {...rest}
      >
        <div className="flex flex-col items-end">
          <strong>{title}</strong>
          <p className="text-sm text-gray-300">{desc}</p>
        </div>
        <span className="text-xl text-primary-300">{icon}</span>
      </li>
    </Link>
  )
}

SidebarButton.displayName = 'Sidebar.Button'

export default SidebarButton
