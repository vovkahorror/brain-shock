import { useState } from 'react'
import ReactPlayer from 'react-player'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'

import { Availability } from '@/availability/Availability'
import { Chipping } from '@/chipping/Chipping'
import { ContextProvider } from '@/common/components/ContextProvider'
import { PostsWrapper } from '@/common/components/PostsWrapper'
import { ScrollToTop } from '@/common/components/ScrollToTop'
import { Footer } from '@/footer/Footer'
import { Header } from '@/header/Header'
import { ModInfo } from '@/mod-info/ModInfo'
import { MainPost } from '@/posts/MainPost'

import styles from './App.module.scss'

import backgroundVideo from './assets/videos/background-video.mp4'

export function App() {
  const [playerReady, setPlayerReady] = useState<boolean>(false)

  const routes: RouteObject[] = [
    {
      children: [
        { element: <MainPost />, index: true },
        { element: <PostsWrapper />, path: 'new/*' },
        { element: <PostsWrapper />, path: 'used/*' },
        { element: <Navigate to={'/'} />, path: '*' },
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
        <Chipping />
        <Availability />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
