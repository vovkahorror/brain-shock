import { FC, ReactNode, createContext, useEffect, useState } from 'react'

import { PostType } from '@/data/posts'

export const NavigationContext = createContext<ContextProps | null>(null)

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [navigationProps, setNavigationProps] = useState<NavigationProps | null>(() => {
    const storedProps = localStorage.getItem('navigationProps')

    return storedProps ? JSON.parse(storedProps) : null
  })

  useEffect(() => {
    if (navigationProps) {
      localStorage.setItem('navigationProps', JSON.stringify(navigationProps))
    }
  }, [navigationProps])

  return (
    <NavigationContext.Provider value={{ navigationProps, setNavigationProps }}>
      {children}
    </NavigationContext.Provider>
  )
}

interface NavigationProps {
  post: PostType
}

export interface ContextProps {
  navigationProps: NavigationProps | null
  setNavigationProps: (props: NavigationProps | null) => void
}
