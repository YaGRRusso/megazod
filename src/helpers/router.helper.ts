export const getLang = (pathname: string) => {
  const pages = pathname.split('/')

  return '/' + pages[1]
}
