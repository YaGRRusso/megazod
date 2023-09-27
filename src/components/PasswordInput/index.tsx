'use client'

import { Input, InputInputProps } from '@coaktion/visu'
import { Eye, EyeClosed } from '@phosphor-icons/react'
import { FC, useState } from 'react'

export interface PasswordInputProps extends InputInputProps {}

const PasswordInput: FC<PasswordInputProps> = ({ children, ...rest }) => {
  const [isShowingPassword, setIsShowingPassword] = useState(false)

  return (
    <Input.Root full>
      <Input.Input type={isShowingPassword ? 'text' : 'password'} {...rest} />
      <Input.Icon onClick={() => setIsShowingPassword(!isShowingPassword)}>
        {isShowingPassword ? <Eye /> : <EyeClosed />}
      </Input.Icon>
    </Input.Root>
  )
}

PasswordInput.displayName = 'PasswordInput'

export default PasswordInput
