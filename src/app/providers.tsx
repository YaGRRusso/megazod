'use client'

import { ReactNode } from 'react'
import { ThemeContextProvider } from './contexts/theme'

export const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>
}
