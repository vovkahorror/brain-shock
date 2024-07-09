import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import PreloaderIcon from '../../assets/images/preloader.svg?react'
const CurrentPosts = lazy(() => import('@/posts/current-posts/CurrentPosts'))
const DetailedPost = lazy(() => import('@/detailed-post/DetailedPost'))

export const PostsWrapper = () => {
  return (
    <Suspense fallback={<PreloaderIcon />}>
      <Routes>
        <Route element={<CurrentPosts />} index />
        <Route element={<DetailedPost />} path={':postIndex/:postTitle'} />
        <Route element={<Navigate to={'/'} />} path={'*'} />
      </Routes>
    </Suspense>
  )
}
