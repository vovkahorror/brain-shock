import { memo, useCallback } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

import { GoBack } from '@/common/components/GoBack/GoBack'
import { siteUrl } from '@/common/consts/links'
import { formatStringToUrlFormat } from '@/common/helpers/formatStringToUrlFormat'
import { postsData } from '@/data/posts-data'
import { Post } from '@/posts/current-posts/post/Post'
import { v1 } from 'uuid'

import styles from './CurrentPosts.module.scss'

const CurrentPosts = memo(() => {
  const location = useLocation()
  const sanitizedPath = location.pathname.replace(/\//g, '') as keyof typeof postsData
  const title = `${sanitizedPath === 'new' ? 'Нові' : 'Вживані'} консолі`

  const canonicalUrl = `${siteUrl}${location.pathname}`

  let minPrice: number = 0
  let maxPrice: number = 0

  const itemsList = postsData[sanitizedPath].map((post, index) => {
    const currentMinPrice = post.minPrice || post.price
    const currentMaxPrice = post.maxPrice || post.price

    if (minPrice === 0) {
      minPrice = post.price
    }
    if (currentMinPrice < minPrice) {
      minPrice = post.price
    }
    if (currentMaxPrice > maxPrice) {
      maxPrice = post.price
    }

    return {
      '@type': 'ListItem',
      item: `${siteUrl}/${sanitizedPath}/${index}/${formatStringToUrlFormat(post.title)}`,
      name: post.title,
      position: index + 1,
    }
  })

  const getPosts = useCallback(
    () =>
      postsData[sanitizedPath].map((post, index) => (
        <Post key={v1()} navPath={sanitizedPath} post={post} postIndex={index} />
      )),
    [sanitizedPath]
  )

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: itemsList,
    },
    description: `${title} Nintendo Switch, прошиті, чиповані та модифіковані для комфортної гри`,
    name: title,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/UsedCondition',
      price: `${minPrice}-${maxPrice}`,
      priceCurrency: 'UAH',
      url: canonicalUrl,
    },
    url: canonicalUrl,
  }

  return (
    <>
      <Helmet>
        <title>{`${title} | BrainShock – магазин прошитих Nintendo Switch`}</title>
        <meta content={title} property={'og:title'} />
        <link href={canonicalUrl} rel={'canonical'} />
        <script type={'application/ld+json'}>{JSON.stringify(schemaData)}</script>
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

export default CurrentPosts
