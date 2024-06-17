import { FC, ReactNode, createContext, useState } from 'react'

import { PostsDataType, postsData } from '@/data/posts-data'

export const NavigationContext = createContext<ContextProps | null>(null)

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<PostsDataType>(postsData)

  return (
    <NavigationContext.Provider value={{ posts, setPosts }}>{children}</NavigationContext.Provider>
  )
}

export interface ContextProps {
  posts: PostsDataType
  setPosts: (posts: PostsDataType) => void
}
