import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './GoBack.module.scss'

import BackIcon from '../../assets/images/back-icon.svg?react'

export const GoBack = () => {
  const navigate = useNavigate()

  const goBack = useCallback(() => navigate(-1), [])

  return (
    <button className={styles.button} onClick={goBack}>
      <BackIcon className={styles.icon} />
      <span>Назад</span>
    </button>
  )
}
