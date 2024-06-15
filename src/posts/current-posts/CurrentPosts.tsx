import { useCallback } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

import { GoBack } from '@/common/components/GoBack/GoBack'
import { posts } from '@/data/posts'
import { Post } from '@/posts/current-posts/post/Post'
import { v1 } from 'uuid'

import styles from './CurrentPosts.module.scss'

export const CurrentPosts = () => {
  const location = useLocation()
  const sanitizedPath = location.pathname.replace(/\//g, '') as keyof typeof posts
  const title = `${sanitizedPath === 'new' ? 'Нові' : 'Вживані'} консолі`

  const getPosts = useCallback(
    () =>
      posts[sanitizedPath].map((post, index) => (
        <Post key={v1()} navPath={sanitizedPath} post={post} postIndex={index} />
      )),
    [sanitizedPath]
  )

  return (
    <>
      <Helmet>
        <title>{`${title} | BrainShock – магазин прошитих Nintendo Switch`}</title>
      </Helmet>

      <section>
        <div className={styles.container}>
          <GoBack />
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.posts}>{getPosts()}</div>
        </div>
      </section>
    </>
  )
}
