import styles from './Availability.module.scss'

import SheetIcon from '../assets/images/sheet-icon.svg?react'

export const Availability = () => {
  const telegramLink = 'https://t.me/Yurkapro2000'
  const sheetLink =
    'https://docs.google.com/spreadsheets/d/1Dn2YrV7_QMns6XzqISJJYcQa_wNbtvvJAfpKPv2Yo_o'

  return (
    <section>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          За посиланням нижче Ви можете переглянути таблицю з наявністю консолей та аксесуарів до
          них. Дата останнього оновлення указана в таблиці, тому наявність додатково уточнюйте в{' '}
          <a
            className={styles.telegramLink}
            href={telegramLink}
            rel={'noreferrer'}
            target={'_blank'}
          >
            Telegram
          </a>
        </p>
        <a href={sheetLink} rel={'noreferrer'} target={'_blank'}>
          <button className={styles.button}>
            <SheetIcon className={styles.icon} />
            Переглянути
          </button>
        </a>
      </div>
    </section>
  )
}
