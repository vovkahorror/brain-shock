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

export const DetailedPost = () => {
  const { navigationProps } = useNavigation()

  return (
    <section>
      <div>
        <LightGallery animateThumb plugins={[lgThumbnail, lgZoom]} speed={500}>
          {navigationProps?.post.photos.map(photo => (
            <a href={photo} key={v1()}>
              <img alt={navigationProps?.post.title} src={photo} style={{ width: '400px' }} />
            </a>
          ))}
        </LightGallery>
      </div>
    </section>
  )
}
