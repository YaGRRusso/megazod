'use client'

import { FC, HTMLAttributes } from 'react'

export interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {}

const FormGroup: FC<FormGroupProps> = ({ children, ...rest }) => {
  return (
    <div className="flex flex-col gap-2" {...rest}>
      {children}
    </div>
  )
}

FormGroup.displayName = 'Form.Group'

export default FormGroup
