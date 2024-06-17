import { useEffect, useRef, useState } from 'react'

import styles from './PagePreloader.module.scss'

import FireImage from '../assets/images/fire.webp'

export const PagePreloader = () => {
  const position = useRef(100)
  const preloaderRef = useRef<HTMLDivElement>(null)
  const preloaderImgRef = useRef<HTMLDivElement>(null)

  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    if (!isImageLoaded) {
      return
    }

    const loading = setInterval(() => {
      if (!preloaderRef.current || !preloaderImgRef.current) {
        return
      }

      preloaderImgRef.current.style.backgroundPosition = `${position.current}% 50%`
      position.current -= 4.5455

      if (position.current <= 0) {
        preloaderRef.current.style.display = 'none'
        clearInterval(loading)
      }
    }, 60)

    return () => clearInterval(loading)
  }, [isImageLoaded])

  return (
    <div className={styles.preloader} ref={preloaderRef}>
      <div className={styles.preloaderFilling} style={{ display: isImageLoaded ? 'none' : 'flex' }}>
        Loading...
      </div>
      <div
        className={styles.preloaderImg}
        ref={preloaderImgRef}
        style={{ backgroundImage: `url(${FireImage})` }}
      ></div>
      <img
        alt={''}
        onLoad={() => setIsImageLoaded(true)}
        src={FireImage}
        style={{ display: 'none' }}
      />
    </div>
  )
}
