import ReactPlayer from 'react-player'
import { Route, Routes } from 'react-router-dom'

import { ContextProvider } from '@/common/components/ContextProvider'
import { Header } from '@/header/Header'
import { Posts } from '@/posts/Posts'

import styles from './App.module.scss'

export function App() {
  const bgVideoUrl = 'https://www.youtube.com/embed/aCPGTNoizxw'

  return (
    <div>
      <div className={styles.pageBackground}>
        <ReactPlayer
          className={styles.bgVideo}
          config={{
            youtube: {
              playerVars: { rel: 0 },
            },
          }}
          height={1080}
          loop
          muted
          playing
          url={bgVideoUrl}
          width={1920}
        />
      </div>

      <Header />
      <main className={styles.main}>
        <ContextProvider>
          <Routes>
            <Route element={<Posts />} path={'/'} />
            <Route element={<div>Detailed</div>} path={'/detailed-post'} />
          </Routes>
        </ContextProvider>
      </main>
    </div>
  )
}
