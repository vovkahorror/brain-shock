import { useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useNavigation } from '@/common/hooks/useNavigation'
import { PostType } from '@/data/posts'

import styles from './Post.module.scss'

import PreloaderIcon from '../../../assets/images/preloader.svg?react'

export const Post = ({ post }: PostProps) => {
  const { setNavigationProps } = useNavigation()
  const { condition, description, photos, price, title } = post
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoad = useCallback(() => setImageLoaded(true), [])

  const handleClick = useCallback(() => setNavigationProps({ post }), [])

  return (
    <article className={styles.post}>
      <div
        className={styles.image}
        onClick={handleClick}
        style={{ backgroundImage: `url(${photos[0]})` }}
      >
        {!imageLoaded && <PreloaderIcon />}
        <NavLink className={styles.title} onClick={handleClick} to={'/detailed-post'} />
      </div>
      <div>
        <h2>
          <NavLink className={styles.title} onClick={handleClick} to={'/detailed-post'}>
            {title}
          </NavLink>
        </h2>
        <span className={styles.price}>{price} грн</span>
        <span className={styles.condition}>стан: {condition}</span>
        <p className={styles.description}>{description}</p>
      </div>
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
  post: PostType
}
