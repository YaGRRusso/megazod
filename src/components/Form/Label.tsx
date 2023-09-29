'use client'

import { FC, HTMLAttributes } from 'react'

export interface FormLabelProps extends HTMLAttributes<HTMLLabelElement> {
  optional?: boolean
}

const FormLabel: FC<FormLabelProps> = ({ optional, children, ...rest }) => {
  return (
    <label className="text-sm font-semibold dark:text-gray" {...rest}>
      {children}{' '}
      {optional && <span className="text-xs font-normal">(opcional)</span>}
    </label>
  )
}

FormLabel.displayName = 'Form.Label'

export default FormLabel
