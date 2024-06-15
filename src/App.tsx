import { useState } from 'react'
import ReactPlayer from 'react-player'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'

import { Availability } from '@/availability/Availability'
import { Chipping } from '@/chipping/Chipping'
import { PostsWrapper } from '@/common/components/PostsWrapper'
import { ScrollToTop } from '@/common/components/ScrollToTop'
import { Footer } from '@/footer/Footer'
import { Header } from '@/header/Header'
import { ModInfo } from '@/mod-info/ModInfo'
import { PageBorder } from '@/page-border/PageBorder'
import { PagePreloader } from '@/page-preloader/PagePreloader'
import { MainPost } from '@/posts/MainPost'
import { Youtube } from '@/youtube/Youtube'

import styles from './App.module.scss'

import backgroundVideo from './assets/videos/background-video.mp4'

export function App() {
  const [playerReady, setPlayerReady] = useState<boolean>(false)

  const routes: RouteObject[] = [
    {
      children: [
        { element: <MainPost />, index: true },
        { element: <PostsWrapper />, path: ':navPath/*' },
        { element: <Navigate to={'/'} />, path: '*' },
      ],
      path: '/',
    },
  ]

  const routesElements = useRoutes(routes)

  const handlePlayerReady = () => setPlayerReady(true)

  return (
    <div>
      <PagePreloader />
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
      <PageBorder />

      <Header />
      <main className={styles.main}>
        <>{routesElements}</>
        <ModInfo />
        <Chipping />
        <Availability />
        <Youtube />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
