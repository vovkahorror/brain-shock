import styles from './Header.module.scss'

import logoImage from '../assets/images/logo.webp'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img alt={'Logo'} src={logoImage} />
          <span>BrainShock</span>
        </div>
      </div>
    </header>
  )
}
