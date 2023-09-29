'use client'

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

type ThemeProps = 'light' | 'dark'

export interface ThemeContextProps {
  theme: ThemeProps
  toggleTheme: () => void
  setTheme: (data: ThemeProps) => void
}

const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeProps>('dark')

  const handleChangeTheme = useCallback((data: ThemeProps) => {
    setTheme(data)
    localStorage.setItem('templateTheme', data)
  }, [])

  const handleToggleTheme = useCallback(() => {
    if (theme === 'dark') handleChangeTheme('light')
    if (theme === 'light') handleChangeTheme('dark')
  }, [handleChangeTheme, theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: handleChangeTheme,
        toggleTheme: handleToggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useThemeContext must be used within an provider')
  }

  return context
}
