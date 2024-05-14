import { useCallback, useState } from 'react'
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
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoad = useCallback(() => setImageLoaded(true), [])

  return (
    <article className={styles.post}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }}>
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
