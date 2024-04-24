import styles from './Header.module.scss'

import logoImage from '../assets/images/logo.webp'
import TelegramIcon from '../assets/images/telegram.svg?react'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img alt={'Logo'} src={logoImage} />
          <span>BrainShock</span>
        </div>
        <div>
          <TelegramIcon />
        </div>
      </div>
    </header>
  )
}
