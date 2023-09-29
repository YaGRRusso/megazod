'use client'

import { Confetti, Form, PageTitle, PasswordInput } from '@/components'
import { Button, Checkbox, Input, Select } from '@coaktion/visu'
import {
  ArrowsCounterClockwise,
  CaretRight,
  Robot,
} from '@phosphor-icons/react'
import { FC, HTMLAttributes, useCallback, useState } from 'react'
import { z } from 'zod'
import check from '../helpers/check'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import mask from '../helpers/mask'

const formSchema = z
  .object({
    name: z
      .string()
      .nonempty('required')
      .regex(check.fullName.value, check.fullName.message),
    email: z.string().nonempty('required').email('invalidEmail'),
    password: z
      .string()
      .nonempty('required')
      .regex(check.number.value, check.number.message)
      .regex(check.capitalLetter.value, check.capitalLetter.message)
      .regex(check.specialCharacter.value, check.specialCharacter.message),
    passwordConfirm: z.string(),
    phone: z.string().nonempty('required').length(11, 'length'),
    timezone: z.string().nonempty('required'),
    terms: z.boolean().refine((value) => value, { message: 'required' }),
    identification: z
      .string()
      .nonempty('required')
      .length(11, 'length')
      .or(z.string().length(14, 'length')),
    postal: z.string().length(8, 'length').or(z.literal('')),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'sameValue',
    path: ['passwordConfirm'],
  })

type FormSchemaProps = z.infer<typeof formSchema>

interface PageFormProps extends HTMLAttributes<HTMLDivElement> {}

const PageForm: FC<PageFormProps> = ({ children, ...rest }) => {
  const [defaultValues] = useState<FormSchemaProps>({
    email: '',
    password: '',
    identification: '',
    name: '',
    passwordConfirm: '',
    phone: '',
    postal: '',
    timezone: '',
    terms: false,
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
        icon={<Robot />}
        title="Megazod"
        desc="Formulário utilizando as bibliotecas zod, react-hook-form e imask para validação e formatação total de informações"
      />
      <Form.Root className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Input.Root full>
            <Input.Input
              value={watch('name')}
              onChange={(ev) => setValue('name', ev.target.value)}
            />
          </Input.Root>
          <Form.Message color="error" isShowing={!!errors.name}>
            {errors.name?.message}
          </Form.Message>
        </Form.Group>

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

        <Form.Group>
          <Form.Label>Confirmar Senha</Form.Label>
          <PasswordInput
            value={watch('passwordConfirm')}
            onChange={(ev) => setValue('passwordConfirm', ev.target.value)}
          />
          <Form.Message color="error" isShowing={!!errors.passwordConfirm}>
            {errors.passwordConfirm?.message}
          </Form.Message>
        </Form.Group>

        <Form.Group>
          <Form.Label>CPF</Form.Label>
          <Input.Root full>
            <Input.Input
              value={
                mask(
                  ['000.000.000-00', '00.000.000/0000-00'], // não está funcionando direito
                  watch('identification'),
                ).value
              }
              onChange={(ev) =>
                setValue(
                  'identification',
                  mask(
                    ['000.000.000-00', '00.000.000/0000-00'], // não está funcionando direito
                    ev.target.value,
                  ).unmaskedValue,
                )
              }
            />
          </Input.Root>
          <Form.Message color="error" isShowing={!!errors.identification}>
            {errors.identification?.message}
          </Form.Message>
        </Form.Group>

        <Form.Group>
          <Form.Label>Fuso Horário</Form.Label>
          <Select.Root
            full
            placeholder="Selecione uma opção"
            className="[&_*]:dark:text-gray-100"
            value={watch('timezone')}
            onChange={(ev) => setValue('timezone', ev)}
          >
            <Select.Item className="dark:text-gray-900" value="1">
              Greenwich (GMT+1)
            </Select.Item>
            <Select.Item className="dark:text-gray-900" value="-3">
              Brasília (GMT-3)
            </Select.Item>
            <Select.Item className="dark:text-gray-900" value="-4">
              Washington (GMT-4)
            </Select.Item>
          </Select.Root>
          <Form.Message color="error" isShowing={!!errors.timezone}>
            {errors.timezone?.message}
          </Form.Message>
        </Form.Group>

        <Form.Group>
          <Form.Label>Telefone</Form.Label>
          <Input.Root full>
            <Input.Input
              value={mask('(00) 00000-0000', watch('phone')).value}
              onChange={(ev) =>
                setValue(
                  'phone',
                  mask('(00) 00000-0000', ev.target.value).unmaskedValue,
                )
              }
            />
          </Input.Root>
          <Form.Message color="error" isShowing={!!errors.phone}>
            {errors.phone?.message}
          </Form.Message>
        </Form.Group>

        <Form.Group>
          <Form.Label optional>Código Postal</Form.Label>
          <Input.Root full>
            <Input.Input
              value={mask('00000-000', watch('postal')).value}
              onChange={(ev) =>
                setValue(
                  'postal',
                  mask('00000-000', ev.target.value).unmaskedValue,
                )
              }
            />
          </Input.Root>
          <Form.Message color="error" isShowing={!!errors.postal}>
            {errors.postal?.message}
          </Form.Message>
        </Form.Group>

        <Form.Group>
          <div className="flex items-center gap-4">
            <Checkbox.Root
              value={watch('terms')}
              onChange={(ev) => setValue('terms', ev)}
            >
              <Checkbox.Indicator />
            </Checkbox.Root>
            <span>Concordo com os temos de uso</span>
          </div>
          <Form.Message color="error" isShowing={!!errors.terms}>
            {errors.terms?.message}
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
