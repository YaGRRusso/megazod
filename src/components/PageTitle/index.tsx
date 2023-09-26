'use client'

import { FC, HTMLAttributes, ReactNode } from 'react'

export interface PageTitleProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode
  title: string
  desc: string
}

const PageTitle: FC<PageTitleProps> = ({
  icon,
  title,
  desc,
  children,
  ...rest
}) => {
  return (
    <div className="flex flex-col" {...rest}>
      <span className="pb-4 text-2xl text-primary">{icon}</span>
      <h2 className="text-xl">
        Formulário <strong className="text-primary">{title}</strong>
      </h2>
      <p className="text-gray-300">{desc}</p>
    </div>
  )
}

PageTitle.displayName = 'PageTitle'

export default PageTitle
