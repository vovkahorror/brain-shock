import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useNavigation } from '@/common/hooks/useNavigation'
import { PostType } from '@/data/posts'

import styles from './Post.module.scss'

import PreloaderIcon from '../../../assets/images/preloader.svg?react'

export const Post = memo(({ navPath, post, postIndex }: PostProps) => {
  const { setNavigationProps } = useNavigation()
  const { photos, price, title } = post
  const imageRef = useRef(null)
  const [backgroundSize, setBackgroundSize] = useState('100% auto')
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const imgSrc = photos[0]

  const handleImageLoad = useCallback(() => setImageLoaded(true), [])

  const handleClick = useCallback(
    () => setNavigationProps({ navPath, post, postIndex }),
    [navPath, post, postIndex, setNavigationProps]
  )

  const updateBackgroundSize = useCallback(() => {
    if (imageRef.current) {
      const { clientHeight, clientWidth } = imageRef.current

      const img = new Image()

      img.src = imgSrc

      img.onload = () => {
        const imgHeight = img.height

        const imgWidth = img.width
        const imgAspectRatio = imgWidth / imgHeight
        const containerAspectRatio = clientWidth / clientHeight

        if (imgAspectRatio > containerAspectRatio) {
          setBackgroundSize('auto 100%')
        } else {
          setBackgroundSize('100% auto')
        }
      }
    }
  }, [imgSrc])

  useEffect(() => {
    updateBackgroundSize()
    window.addEventListener('resize', updateBackgroundSize)

    return () => window.removeEventListener('resize', updateBackgroundSize)
  }, [updateBackgroundSize])

  return (
    <article
      className={styles.post}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={styles.image}
        onClick={handleClick}
        ref={imageRef}
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: isHovered ? '110% auto' : backgroundSize,
        }}
      >
        {!imageLoaded && <PreloaderIcon />}
      </div>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.price}>{price} грн</span>

      <NavLink
        className={styles.link}
        onClick={handleClick}
        to={`/${navPath}/detailed-post/${postIndex}`}
      />
      <img
        alt={''}
        onError={handleImageLoad}
        onLoad={handleImageLoad}
        src={photos[0]}
        style={{ display: 'none' }}
      />
    </article>
  )
})

interface PostProps {
  navPath: 'new' | 'used'
  post: PostType
  postIndex: number
}
