import { useCallback } from 'react'

import { posts } from '@/data/posts'
import { Post } from '@/posts/post/Post'
import { v1 } from 'uuid'

import styles from './Posts.module.scss'

export const Posts = () => {
  const getPosts = useCallback(() => posts.map(post => <Post key={v1()} post={post} />), [])

  return (
    <section>
      <div className={styles.container}>{getPosts()}</div>
    </section>
  )
}
