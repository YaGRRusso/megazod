'use-client'

import { FC, HTMLAttributes } from 'react'

export interface PageTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  desc: string
}

const PageTitle: FC<PageTitleProps> = ({ title, desc, children, ...rest }) => {
  return (
    <div {...rest}>
      <h2 className="text-xl">
        Formulário <strong className="text-primary">{title}</strong>
      </h2>
      <p className="text-gray-300">{desc}</p>
    </div>
  )
}

PageTitle.displayName = 'PageTitle'

export default PageTitle
