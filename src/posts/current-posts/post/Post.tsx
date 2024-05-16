import { useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useNavigation } from '@/common/hooks/useNavigation'
import { PostType } from '@/data/posts'

import styles from './Post.module.scss'

import PreloaderIcon from '../../../assets/images/preloader.svg?react'

export const Post = ({ navPath, post }: PostProps) => {
  const { setNavigationProps } = useNavigation()
  const { photos, price, title } = post
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoad = useCallback(() => setImageLoaded(true), [])

  const handleClick = useCallback(
    () => setNavigationProps({ navPath, post }),
    [navPath, post, setNavigationProps]
  )

  return (
    <article className={styles.post}>
      <div
        className={styles.image}
        onClick={handleClick}
        style={{ backgroundImage: `url(${photos[0]})` }}
      >
        {!imageLoaded && <PreloaderIcon />}
      </div>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.price}>{price} грн</span>

      <NavLink className={styles.title} onClick={handleClick} to={'/detailed-post'} />
      <img
        alt={''}
        onError={handleImageLoad}
        onLoad={handleImageLoad}
        src={photos[0]}
        style={{ display: 'none' }}
      />
    </article>
  )
}

interface PostProps {
  navPath: 'new' | 'used'
  post: PostType
}
