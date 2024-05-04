import { useMemo } from 'react'
import { Navigate } from 'react-router-dom'

import { useNavigation } from '@/common/hooks/useNavigation'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import LightGallery from 'lightgallery/react'
import { v1 } from 'uuid'

import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/scss/lg-zoom.scss'
import 'lightgallery/scss/lightgallery.scss'

import styles from './DetailedPost.module.scss'

export const DetailedPost = () => {
  const { navigationProps } = useNavigation()

  const imagesSizes = useMemo(
    () =>
      navigationProps?.post.photos.map(photo => {
        const img = new Image()

        img.src = photo

        return `${img.width}-${img.height}`
      }),
    [navigationProps?.post]
  ) as string[]

  if (!navigationProps) {
    return <Navigate to={'/'} />
  }

  return (
    <section>
      <div className={styles.container}>
        <h2 className={styles.title}>{navigationProps.post.title}</h2>
        <div className={styles.content}>
          <div className={styles.galleryWrapper}>
            <LightGallery plugins={[lgThumbnail, lgZoom]} speed={500}>
              {navigationProps?.post.photos.map((photo, ind) => (
                <a data-lg-size={imagesSizes[ind]} href={photo} key={v1()}>
                  <img alt={navigationProps.post.title} src={photo} />
                </a>
              ))}
            </LightGallery>
          </div>
          <div className={styles.text}>
            <span className={styles.price}>{navigationProps.post.price} грн</span>
          </div>
        </div>
      </div>
    </section>
  )
}
