import { useCallback } from 'react'

import { posts } from '@/data/posts'
import { Post } from '@/posts/current-posts/post/Post'
import { v1 } from 'uuid'

import styles from './CurrentPosts.module.scss'

export const CurrentPosts = () => {
  const getPosts = useCallback(() => posts.map(post => <Post key={v1()} post={post} />), [])

  return (
    <section>
      <div className={styles.container}>{getPosts()}</div>
    </section>
  )
}
