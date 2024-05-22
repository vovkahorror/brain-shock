import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'

import { posts } from '@/data/posts'
import { Post } from '@/posts/current-posts/post/Post'
import { v1 } from 'uuid'

import styles from './CurrentPosts.module.scss'

export const CurrentPosts = () => {
  const location = useLocation()
  const sanitizedPath = location.pathname.replace(/\//g, '') as keyof typeof posts

  const getPosts = useCallback(
    () => posts[sanitizedPath].map(post => <Post key={v1()} navPath={sanitizedPath} post={post} />),
    [sanitizedPath]
  )

  return (
    <section>
      <div className={styles.container}>
        <h2 className={styles.title}>{`${
          sanitizedPath === 'new' ? 'Нові' : 'Вживані'
        } консолі`}</h2>
        <div className={styles.posts}>{getPosts()}</div>
      </div>
    </section>
  )
}
