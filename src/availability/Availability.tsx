import { memo } from 'react'

import { sheetLink, telegramLinkAdmin } from '@/common/consts/links'

import styles from './Availability.module.scss'

import SheetIcon from '../assets/images/sheet-icon.svg?react'

export const Availability = memo(() => {
  return (
    <section>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          За посиланням нижче Ви можете переглянути таблицю з наявністю консолей та аксесуарів до
          них. Дата останнього оновлення указана в таблиці, тому наявність додатково уточнюйте в{' '}
          <a
            className={styles.telegramLink}
            href={telegramLinkAdmin}
            rel={'noreferrer'}
            target={'_blank'}
          >
            Telegram
          </a>
        </p>
        <a href={sheetLink} rel={'noreferrer'} target={'_blank'}>
          <button aria-label={'Google-таблиця'} className={styles.button}>
            <SheetIcon className={styles.icon} />
            Переглянути
          </button>
        </a>
      </div>
    </section>
  )
})
