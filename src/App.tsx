import ReactPlayer from 'react-player'

import { Header } from '@/header/Header'

import styles from './App.module.scss'

export function App() {
  const bgVideoUrl = 'https://https://www.youtube.com/embed/aCPGTNoizxw'

  return (
    <div>
      <div className={styles.pageBackground}>
        <ReactPlayer
          className={styles.bgVideo}
          height={1080}
          loop
          muted
          playing
          url={bgVideoUrl}
          width={1920}
        />
      </div>

      <Header />
      <main></main>
    </div>
  )
}
