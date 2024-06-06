import { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './MainPost.module.scss'

import CoverImageNew from '../assets/images/cover-new.webp'
import CoverImageUsed from '../assets/images/cover-used.webp'
import PreloaderIcon from '../assets/images/preloader.svg?react'

export const MainPost = () => {
  return (
    <section>
      <div className={styles.container}>
        <MainPostItem image={CoverImageNew} navPath={'new'} title={'Нові Nintendo Switch'} />
        <MainPostItem image={CoverImageUsed} navPath={'used'} title={'Вживані Nintendo Switch'} />
      </div>
    </section>
  )
}

const MainPostItem = ({ image, navPath, title }: MainPostItemProps) => {
  const imageRef = useRef(null)
  const [backgroundSize, setBackgroundSize] = useState('100% auto')
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleImageLoad = useCallback(() => setImageLoaded(true), [])

  const updateBackgroundSize = useCallback(() => {
    if (imageRef.current) {
      const { clientHeight, clientWidth } = imageRef.current

      const img = new Image()

      img.src = image

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
  }, [image])

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
        ref={imageRef}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: isHovered ? '110% auto' : backgroundSize,
        }}
      >
        {!imageLoaded && <PreloaderIcon />}
      </div>
      <h2 className={styles.title}>{title}</h2>
      <NavLink className={styles.title} to={`/${navPath}`} />
      <img
        alt={''}
        onError={handleImageLoad}
        onLoad={handleImageLoad}
        src={image}
        style={{ display: 'none' }}
      />
    </article>
  )
}

interface MainPostItemProps {
  image: string
  navPath: 'new' | 'used'
  title: string
}
