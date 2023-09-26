'use client'

import { WarningOctagon } from '@phosphor-icons/react'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

const colorVariants = {
  default: 'text-gray',
  error: 'text-error',
}

export interface FormMessageProps extends HTMLAttributes<HTMLDivElement> {
  color?: keyof typeof colorVariants
  isShowing?: boolean
}

const FormMessage: FC<FormMessageProps> = ({
  color = 'default',
  isShowing = true,
  children,
  ...rest
}) => {
  return (
    isShowing && (
      <small
        className={clsx(
          'flex items-center gap-1 text-xs',
          colorVariants[color],
        )}
        {...rest}
      >
        {color === 'error' && <WarningOctagon />} {children}
      </small>
    )
  )
}

FormMessage.displayName = 'Form.Message'

export default FormMessage
