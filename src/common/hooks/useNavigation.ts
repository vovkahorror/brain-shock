import { useContext } from 'react'

import { ContextProps, NavigationContext } from '@/common/components/ContextProvider'

export const useNavigation = (): ContextProps => {
  const context = useContext(NavigationContext)

  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }

  return context
}
