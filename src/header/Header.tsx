import { NavLink } from 'react-router-dom'

import { telegramLink } from '@/common/consts/links'

import styles from './Header.module.scss'

import logoImage from '../assets/images/logo.webp'
import TelegramIcon from '../assets/images/telegram.svg?react'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to={'/'}>
          <span className={styles.logo}>
            <img alt={'Logo'} src={logoImage} />
            <svg className={styles.title}>
              <text dy={'.35em'} textAnchor={'middle'} x={'50%'} y={'50%'}>
                BrainShock
              </text>
            </svg>
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
