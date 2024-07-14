import { memo, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Navigate, useLocation, useParams } from 'react-router-dom'

import { GoBack } from '@/common/components/GoBack/GoBack'
import { ImageWithPreloading } from '@/common/components/ImageWithPreloading'
import { messageLink, siteUrl, telegramLink } from '@/common/consts/links'
import { formatStringToUrlFormat } from '@/common/helpers/formatStringToUrlFormat'
import { useNavigation } from '@/common/hooks/useNavigation'
import { postsData } from '@/data/posts-data'
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

import BasketIcon from '../assets/images/basket-icon.svg?react'

const DetailedPost = memo(() => {
  const { posts } = useNavigation()
  const { navPath, postIndex, postTitle } = useParams()
  const [imagesSizes, setImagesSizes] = useState([] as string[])
  const location = useLocation()

  const currentPost = posts[navPath as keyof typeof postsData][postIndex as unknown as number]

  const canonicalUrl = `${siteUrl}${location.pathname}`

  useEffect(() => {
    if (currentPost && currentPost.photos) {
      const fetchImageSizes = async () => {
        const sizes = await Promise.all(
          currentPost.photos.map(photo => {
            return new Promise<string>((resolve, reject) => {
              const img = new Image()

              img.onload = () => {
                resolve(`${img.width}-${img.height}`)
              }
              img.onerror = error => {
                reject(error)
              }
              img.src = photo
            })
          })
        )

        setImagesSizes(sizes)
      }

      fetchImageSizes()
    }
  }, [currentPost])

  if (!currentPost || postTitle !== formatStringToUrlFormat(currentPost.title)) {
    return <Navigate to={'/'} />
  }

  const { color, condition, description, photos, price, title } = currentPost

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
    },
    brand: {
      '@type': 'Brand',
      name: 'Nintendo Switch',
    },
    description: description,
    image: photos,
    name: title,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      // hasMerchantReturnPolicy: {
      //   '@type': 'MerchantReturnPolicy',
      //   name: 'Політика повернення',
      //   returnPolicyCountry: 'UA',
      // },
      price: price,
      priceCurrency: 'UAH',
      priceValidUntil: '2025-12-31',
      seller: {
        '@type': 'Organization',
        name: 'BrainShock',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          businessDays: '1-2',
        },
        shippingRate: {
          '@type': 'PropertyValue',
          currency: 'UAH',
          value: true,
        },
      },
      url: canonicalUrl,
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
      },
    ],
  }

  return (
    <>
      <Helmet>
        <title>{`${currentPost.title} прошита ${
          condition === 'новий' ? 'нова' : 'вживана'
        } | BrainShock – магазин прошитих Nintendo Switch`}</title>
        <meta content={title} property={'og:title'} />
        <link href={canonicalUrl} rel={'canonical'} />
        <script type={'application/ld+json'}>{JSON.stringify(schemaData)}</script>
      </Helmet>

      <section>
        <div className={styles.container}>
          <GoBack path={`/${navPath}`} />
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.content}>
            <div className={styles.galleryWrapper}>
              <LightGallery plugins={[lgThumbnail, lgZoom]} speed={500}>
                {photos.map((photo, ind) => (
                  <a data-lg-size={imagesSizes[ind]} href={photo} key={v1()}>
                    <ImageWithPreloading alt={title} image={photo} />
                  </a>
                ))}
              </LightGallery>
            </div>
            <div className={styles.text}>
              <span className={styles.price}>{price} грн</span>
              <span>
                <span className={styles.valueTitle}>стан:</span>{' '}
                <span className={styles.value}>{condition}</span>
              </span>
              {color && (
                <span>
                  <span className={styles.valueTitle}>колір:</span>{' '}
                  <span className={styles.value}>{currentPost.color}</span>
                </span>
              )}
              <a href={messageLink} rel={'noreferrer'} target={'_blank'}>
                <button aria-label={'Замовити'} className={styles.button}>
                  <BasketIcon className={styles.icon} />
                  Замовити
                </button>
              </a>
              <div className={styles.description}>
                {description.split('\n').map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          </div>
          {navPath === 'used' && (
            <p className={styles.note}>
              * На фото представлений приклад вживаної консолі і її вартість. Обіг консолей
              достатньо активний, не завжди є можливість фотографувати кожну консоль та викладати
              фото на сайт. Тож просимо Вас поставится з розумінням. Трапляються консолі у котрих
              косметичний стан гірший, або мають не повний комплект. Але й такі консолі будуть
              коштувати дешевше. В нашій{' '}
              <a
                className={styles.telegramLink}
                href={telegramLink}
                rel={'noreferrer'}
                target={'_blank'}
              >
                групі в Telegram
              </a>{' '}
              регулярно викладаються фото і відео консолей котрі є в наявності, заважди
              демонструються косметичні недоліки. Також, за Вашим запитом, в месенджері ми можемо
              продемонструвати додаткові фото і відео вживаних консолей, які Вас зацікавили.
            </p>
          )}
        </div>
      </section>
    </>
  )
})

export default DetailedPost
