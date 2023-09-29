'use client'

import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import { useThemeContext } from '../contexts/theme'

export interface BodyProps extends HTMLAttributes<HTMLBodyElement> {}

const Body: FC<BodyProps> = ({ children, className, ...rest }) => {
  const { theme } = useThemeContext()

  return (
    <body className={clsx(className, theme)} {...rest}>
      {children}
    </body>
  )
}

Body.displayName = 'Body'

export default Body
