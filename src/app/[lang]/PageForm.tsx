'use client'

import { Form, PageTitle } from '@/components'
import check from '@/helpers/check.helper'
import { Button, Input } from '@coaktion/visu'
import { ArrowsCounterClockwise, CaretRight } from '@phosphor-icons/react'
import { FC, FormEvent, HTMLAttributes, useCallback, useState } from 'react'

interface PageFormProps extends HTMLAttributes<HTMLDivElement> {}

const PageForm: FC<PageFormProps> = ({ children, ...rest }) => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState<string | null>(null)

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState<string | null>(null)

  const onSubmit = useCallback(() => {
    console.log({ email, password })
  }, [email, password])

  const checkEmail = useCallback(() => {
    const error = check.required(email) || check.email(email)
    setEmailError(error || '')
    return error
  }, [email])

  const checkPassword = useCallback(() => {
    const error =
      check.required(password) ||
      check.capitalLetter(password) ||
      check.number(password) ||
      check.specialCharacter(password)
    setPasswordError(error || '')
    return error
  }, [password])

  const handleSubmit = useCallback(
    (ev: FormEvent<HTMLFormElement>, fn: (data?: any) => void) => {
      ev.preventDefault()
      const hasError = [checkEmail(), checkPassword()].some(
        (message) => message,
      )
      if (!hasError) {
        fn()
      }
    },
    [checkEmail, checkPassword],
  )

  return (
    <div className="flex w-full max-w-xl flex-col gap-16 rounded-lg" {...rest}>
      <PageTitle
        title="Use State"
        desc="Formulário utilizando o React useState padrão."
      />
      <Form.Root
        className="w-full"
        onSubmit={(ev) => handleSubmit(ev, onSubmit)}
      >
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Input.Root full>
            <Input.Input
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </Input.Root>
          <Form.Message color="error" isShowing={!!emailError}>
            {emailError}
          </Form.Message>
        </Form.Group>

        <Form.Group>
          <Form.Label>Senha</Form.Label>
          <Input.Root full>
            <Input.Input
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </Input.Root>
          <Form.Message color="error" isShowing={!!passwordError}>
            {passwordError}
          </Form.Message>
        </Form.Group>

        <div className="mt-4 flex items-center justify-end gap-4">
          <Button.Root ghost size="sm" type="button">
            <Button.Icon>
              <ArrowsCounterClockwise />
            </Button.Icon>
          </Button.Root>
          <Button.Root type="submit">
            Enviar{' '}
            <Button.Icon>
              <CaretRight />
            </Button.Icon>
          </Button.Root>
        </div>
      </Form.Root>
    </div>
  )
}

PageForm.displayName = 'PageForm'

export default PageForm
