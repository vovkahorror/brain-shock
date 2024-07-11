import { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { ClickableIcon } from '@/common/components/ClickableIcon/ClickableIcon'
import { promLink, shafaLink, telegramLink } from '@/common/consts/links'

import styles from './Header.module.scss'

import logoImage from '../assets/images/logo.webp'
import PromIcon from '../assets/images/prom.svg?react'
import ShafaIcon from '../assets/images/shafa.svg?react'
import TelegramIcon from '../assets/images/telegram.svg?react'

export const Header = memo(() => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to={'/'}>
          <span className={styles.logo}>
            <img alt={'Logo'} src={logoImage} />
            <h1>
              <svg className={styles.title}>
                <text dy={'.35em'} textAnchor={'middle'} x={'50%'} y={'50%'}>
                  BrainShock
                </text>
              </svg>
            </h1>
          </span>
        </NavLink>
        <div className={styles.iconsBlock}>
          <ClickableIcon Icon={TelegramIcon} link={telegramLink} name={'Telegram link'} />
          <ClickableIcon Icon={PromIcon} link={promLink} name={'Prom link'} />
          <ClickableIcon Icon={ShafaIcon} link={shafaLink} name={'Shafa link'} />
        </div>
      </div>
    </header>
  )
})
