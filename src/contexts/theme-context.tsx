import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
  readonly children: React.ReactNode
  storageKey: string
}

type ThemeProviderState = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext({} as ThemeProviderState)

export function ThemeProvider({
  children,
  storageKey,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) ?? 'dark'
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    localStorage.setItem(storageKey, theme)

    root.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light': 'dark')
  }

  const value = {
    theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
