import { Navigate, Route, Routes } from 'react-router-dom'

import { DetailedPost } from '@/detailed-post/DetailedPost'
import { CurrentPosts } from '@/posts/current-posts/CurrentPosts'

export const PostsWrapper = () => {
  return (
    <Routes>
      <Route element={<CurrentPosts />} index />
      <Route element={<DetailedPost />} path={'detailed-post/:postIndex/:postTitle'} />
      <Route element={<Navigate to={'/'} />} path={'*'} />
    </Routes>
  )
}
