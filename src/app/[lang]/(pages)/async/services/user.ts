type GetUserServiceOutput = Promise<{ email: string; password: string }>

export const getUserService = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        email: 'async@email.com',
        password: '',
      })
    }, 3000)
  }) as GetUserServiceOutput
}
