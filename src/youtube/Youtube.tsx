import { youtubeLink } from '@/common/consts/links'

import styles from './Youtube.module.scss'

import YoutubeIcon from '../assets/images/youtube-icon.svg?react'

export const Youtube = () => {
  return (
    <section>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          Наш YouTube канал – це простір для користувачів прошитих Nintendo Switch. На ньому Ви
          знайдете корисну інформацію як для новачіків, так і для досвідчених користувачів.
          Приєднуйтесь!
        </p>
        <a href={youtubeLink} rel={'noreferrer'} target={'_blank'}>
          <button className={styles.button}>
            <YoutubeIcon className={styles.icon} />
            YouTube
          </button>
        </a>
      </div>
    </section>
  )
}
