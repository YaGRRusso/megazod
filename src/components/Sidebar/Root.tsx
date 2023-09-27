'use client'

import { FC, HTMLAttributes } from 'react'

export interface SidebarRootProps extends HTMLAttributes<HTMLUListElement> {}

const SidebarRoot: FC<SidebarRootProps> = ({ children, ...rest }) => {
  return (
    <ul
      className="flex w-full flex-col gap-y-4 border-r border-primary-300 text-right"
      {...rest}
    >
      {children}
    </ul>
  )
}

SidebarRoot.displayName = 'Sidebar.Root'

export default SidebarRoot
