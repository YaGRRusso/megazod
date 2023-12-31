'use client'

import { Confetti, Form, PageTitle, PasswordInput } from '@/components'
import { Button, Input } from '@coaktion/visu'
import {
  Alien,
  ArrowsCounterClockwise,
  CaretRight,
} from '@phosphor-icons/react'
import { FC, HTMLAttributes, useCallback, useState } from 'react'
import { z } from 'zod'
import check from '../helpers/check'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  email: z.string().nonempty('required').email('invalidEmail'),
  password: z
    .string()
    .nonempty('required')
    .regex(check.number.value, check.number.message)
    .regex(check.capitalLetter.value, check.capitalLetter.message)
    .regex(check.specialCharacter.value, check.specialCharacter.message),
})

type FormSchemaProps = z.infer<typeof formSchema>

interface PageFormProps extends HTMLAttributes<HTMLDivElement> {}

const PageForm: FC<PageFormProps> = ({ children, ...rest }) => {
  const [defaultValues] = useState<FormSchemaProps>({
    email: '',
    password: '',
  })

  const {
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormSchemaProps>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const onSubmit = useCallback((data: FormSchemaProps) => {
    console.log(data)
  }, [])

  return (
    <>
      {isSubmitSuccessful && <Confetti />}
      <PageTitle
        icon={<Alien />}
        title="Zod e React-Hook-Form"
        desc="Formulário utilizando as bibliotecas zod e react-hook-form"
      />
      <Form.Root className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Input.Root full>
            <Input.Input
              value={watch('email')}
              onChange={(ev) => setValue('email', ev.target.value)}
            />
          </Input.Root>
          <Form.Message color="error" isShowing={!!errors.email}>
            {errors.email?.message}
          </Form.Message>
        </Form.Group>

        <Form.Group>
          <Form.Label>Senha</Form.Label>
          <PasswordInput
            value={watch('password')}
            onChange={(ev) => setValue('password', ev.target.value)}
          />
          <Form.Message color="error" isShowing={!!errors.password}>
            {errors.password?.message}
          </Form.Message>
        </Form.Group>

        <div className="mt-4 flex items-center justify-end gap-4">
          <Button.Root
            ghost
            size="sm"
            type="button"
            onClick={() => reset(defaultValues)}
          >
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
    </>
  )
}

PageForm.displayName = 'PageForm'

export default PageForm
