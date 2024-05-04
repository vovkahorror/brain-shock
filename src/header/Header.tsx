import { NavLink } from 'react-router-dom'

import styles from './Header.module.scss'

import logoImage from '../assets/images/logo.webp'
import TelegramIcon from '../assets/images/telegram.svg?react'

export const Header = () => {
  const telegramLink = 'https://t.me/Brain_Shock'

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to={'/'}>
          <span className={styles.logo}>
            <img alt={'Logo'} src={logoImage} />
            <span className={styles.title}>BrainShock</span>
          </span>
        </NavLink>
        <div>
          <a className={styles.link} href={telegramLink} rel={'noreferrer'} target={'_blank'}>
            <span className={styles.iconWrapperTop}>
              <TelegramIcon className={styles.icon} />
            </span>
            <span className={styles.iconWrapperBottom}>
              <TelegramIcon className={styles.icon} />
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}
