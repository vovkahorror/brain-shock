import Iframe from 'react-iframe'

import { Header } from '@/header/Header'

import styles from './App.module.scss'

export function App() {
  const bgVideoUrl =
    'https://www.youtube.com/embed/aCPGTNoizxw?autoplay=1&mute=1&controls=0&loop=1&playlist=aCPGTNoizxw&vq=hd1080'

  return (
    <div>
      <div className={styles.pageBackground}>
        <Iframe
          allow={
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          }
          allowFullScreen
          className={styles.bgVideo}
          display={'block'}
          frameBorder={0}
          id={''}
          position={'relative'}
          referrerpolicy={'strict-origin-when-cross-origin'}
          url={bgVideoUrl}
        />
      </div>

      <Header />
    </div>
  )
}
