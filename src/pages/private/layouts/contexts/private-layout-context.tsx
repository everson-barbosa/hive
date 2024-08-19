import { ReactNode, useContext, createContext, useState } from "react";

interface PrivateLayoutContextProps {
  readonly isMenuOpen: boolean
  readonly toggleMenu: () => void
}

export const PrivateLayoutContext = createContext({} as PrivateLayoutContextProps)

interface PrivateLayoutProviderProps {
  readonly children: ReactNode
  readonly storageKey: string
}

export function PrivateLayoutProvider({ children, storageKey }: PrivateLayoutProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(() => localStorage.getItem(storageKey) === 'true')

  const toggleMenu = () => {
    setIsMenuOpen(prev => {
      localStorage.setItem(storageKey, String(!prev))
      return !prev
    })

  }

  return (
    <PrivateLayoutContext.Provider value={{
      isMenuOpen,
      toggleMenu
    }}>
      {children}
    </PrivateLayoutContext.Provider>
  )
}

export const usePrivateLayout = () => useContext(PrivateLayoutContext)