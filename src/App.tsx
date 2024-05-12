import { useState } from 'react'
import ReactPlayer from 'react-player'
import { RouteObject, useRoutes } from 'react-router-dom'

import { Availability } from '@/availability/Availability'
import { ContextProvider } from '@/common/components/ContextProvider'
import { Footer } from '@/footer/Footer'
import { Header } from '@/header/Header'
import { ModInfo } from '@/mod-info/ModInfo'
import { MainPost } from '@/posts/MainPost'
import { CurrentPosts } from '@/posts/current-posts/CurrentPosts'

import styles from './App.module.scss'

import backgroundVideo from './assets/videos/background-video.mp4'

export function App() {
  const [playerReady, setPlayerReady] = useState<boolean>(false)

  const routes: RouteObject[] = [
    {
      children: [
        { element: <MainPost />, index: true },
        { element: <CurrentPosts />, path: '/new' },
        { element: <CurrentPosts />, path: '/used' },
      ],
      path: '/',
    },
  ]

  const routesElements = useRoutes(routes)

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
        <ContextProvider>{routesElements}</ContextProvider>
        <ModInfo />
        <Availability />
      </main>
      <Footer />
    </div>
  )
}
