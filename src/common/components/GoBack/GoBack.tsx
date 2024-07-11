import { memo } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './GoBack.module.scss'

import BackIcon from '../../../assets/images/back-icon.svg?react'

export const GoBack = memo(({ path }: GoBackProps) => {
  const navLink = path ? path : '/'

  return (
    <NavLink to={navLink}>
      <button aria-label={'Назад'} className={styles.button}>
        <BackIcon className={styles.icon} />
        <span className={styles.text}>Назад</span>
      </button>
    </NavLink>
  )
})

interface GoBackProps {
  path?: string
}
