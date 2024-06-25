import { memo, useCallback } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

import { GoBack } from '@/common/components/GoBack/GoBack'
import { siteUrl } from '@/common/consts/links'
import { postsData } from '@/data/posts-data'
import { Post } from '@/posts/current-posts/post/Post'
import { v1 } from 'uuid'

import styles from './CurrentPosts.module.scss'

export const CurrentPosts = memo(() => {
  const location = useLocation()
  const sanitizedPath = location.pathname.replace(/\//g, '') as keyof typeof postsData
  const title = `${sanitizedPath === 'new' ? 'Нові' : 'Вживані'} консолі`

  const canonicalUrl = `${siteUrl}${location.pathname}`

  const getPosts = useCallback(
    () =>
      postsData[sanitizedPath].map((post, index) => (
        <Post key={v1()} navPath={sanitizedPath} post={post} postIndex={index} />
      )),
    [sanitizedPath]
  )

  return (
    <>
      <Helmet>
        <title>{`${title} | BrainShock – магазин прошитих Nintendo Switch`}</title>
        <meta content={title} property={'og:title'} />
        <link href={canonicalUrl} rel={'canonical'} />
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
})
