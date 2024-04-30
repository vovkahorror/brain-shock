import { FC, ReactNode, createContext, useState } from 'react'

import { PostType } from '@/data/posts'

export const NavigationContext = createContext<ContextProps | null>(null)

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [navigationProps, setNavigationProps] = useState<NavigationProps | null>(null)

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
