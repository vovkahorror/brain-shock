import { telegramLink } from '@/common/consts/links'

import styles from './Footer.module.scss'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span>
          © <a href={telegramLink}>BrainShock</a>
        </span>
        <span>2023-{currentYear}</span>
      </div>
    </footer>
  )
}
