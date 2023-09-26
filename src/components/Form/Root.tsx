'use client'

import clsx from 'clsx'
import { FC, FormHTMLAttributes } from 'react'

export interface FormRootProps extends FormHTMLAttributes<HTMLFormElement> {}

const FormRoot: FC<FormRootProps> = ({ children, className, ...rest }) => {
  return (
    <form className={clsx('flex flex-col gap-8', className)} {...rest}>
      {children}
    </form>
  )
}

FormRoot.displayName = 'Form.Root'

export default FormRoot
