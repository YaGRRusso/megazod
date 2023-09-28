type GetUserServiceOutput = Promise<{
  name: string
  email: string
  password: string
  phone: string
  timezone: string
  terms: boolean
  identification: string
  postal: string
}>

export const getUserService = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Michael Scott',
        email: 'michael@scott.com',
        password: '',
        phone: '0012341234',
        timezone: '-3',
        terms: true,
        identification: '12312312300',
        postal: '12123000',
      })
    }, 3000)
  }) as GetUserServiceOutput
}
