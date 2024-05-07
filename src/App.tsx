import { useState } from 'react'
import ReactPlayer from 'react-player'
import { Route, Routes } from 'react-router-dom'

import { ContextProvider } from '@/common/components/ContextProvider'
import { DetailedPost } from '@/detailed-post/DetailedPost'
import { Header } from '@/header/Header'
import { ModInfo } from '@/mod-info/ModInfo'
import { Posts } from '@/posts/Posts'

import styles from './App.module.scss'

import backgroundVideo from './assets/videos/background-video.mp4'

export function App() {
  const [playerReady, setPlayerReady] = useState<boolean>(false)

  const handlePlayerReady = () => setPlayerReady(true)

  return (
    <div>
      <div className={styles.pageBackground}>
        <ReactPlayer
          className={styles.bgVideo}
          height={1080}
          loop
          muted
          onReady={handlePlayerReady}
          playing
          style={{ opacity: playerReady ? 1 : 0 }}
          url={backgroundVideo}
          width={1920}
        />
      </div>

      <Header />
      <main className={styles.main}>
        <ContextProvider>
          <Routes>
            <Route element={<Posts />} path={'/'} />
            <Route element={<DetailedPost />} path={'/detailed-post'} />
          </Routes>
        </ContextProvider>
        <ModInfo />
      </main>
    </div>
  )
}
