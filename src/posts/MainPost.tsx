import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'

import { siteUrl } from '@/common/consts/links'

import styles from './MainPost.module.scss'

import CoverImageNew from '../assets/images/cover-new.webp'
import CoverImageUsed from '../assets/images/cover-used.webp'
import logo from '../assets/images/logo.webp'
import PreloaderIcon from '../assets/images/preloader.svg?react'

export const MainPost = memo(() => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    description: 'BrainShock – магазин прошитих Nintendo Switch',
    image: [CoverImageNew, CoverImageUsed],
    logo: logo,
    name: 'BrainShock',
    offers: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          image: CoverImageNew,
          name: 'Нові Nintendo Switch',
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/UsedCondition',
          priceCurrency: 'UAH',
        },
        url: `${siteUrl}/new`,
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          image: CoverImageUsed,
          name: 'Вживані Nintendo Switch',
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/UsedCondition',
          priceCurrency: 'UAH',
        },
        url: `${siteUrl}/used`,
      },
    ],
    url: siteUrl,
  }

  return (
    <>
      <Helmet>
        <title>BrainShock – магазин прошитих Nintendo Switch</title>
        <meta content={'BrainShock'} property={'og:title'} />
        <link href={siteUrl} rel={'canonical'} />
        <script type={'application/ld+json'}>{JSON.stringify(schemaData)}</script>
      </Helmet>

      <section>
        <div className={styles.container}>
          <MainPostItem image={CoverImageNew} navPath={'new'} title={'Нові Nintendo Switch'} />
          <MainPostItem image={CoverImageUsed} navPath={'used'} title={'Вживані Nintendo Switch'} />
          <p className={styles.greeting}>
            Вітаємо у нашому магазині{' '}
            <span className={styles.emphasis}>прошитих Nintendo Switch</span>. Трохи про прошивку
            консолей: вразливість консолі активується завдяки припаяному чіпу{' '}
            <span className={styles.emphasis}>Picofly</span>, що дає можливість завантажити кастомну
            ОС &quot;<span className={styles.emphasis}>Atmosphere</span>&quot;, або збірки на базі
            цієї ОС, як &quot;
            <span className={styles.emphasis}>Kefir</span>&quot; або &quot;
            <span className={styles.emphasis}>4ifir</span>&quot;. Консолі не бояться
            перезавантаження, або розряду акумулятора.
          </p>
        </div>
      </section>
    </>
  )
})

const MainPostItem = memo(({ image, navPath, title }: MainPostItemProps) => {
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
})

interface MainPostItemProps {
  image: string
  navPath: 'new' | 'used'
  title: string
}
