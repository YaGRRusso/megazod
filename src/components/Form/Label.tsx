'use client'

import { FC, HTMLAttributes } from 'react'

export interface FormLabelProps extends HTMLAttributes<HTMLLabelElement> {}

const FormLabel: FC<FormLabelProps> = ({ children, ...rest }) => {
  return (
    <label className="text-sm font-semibold text-gray" {...rest}>
      {children}
    </label>
  )
}

FormLabel.displayName = 'Form.Label'

export default FormLabel
