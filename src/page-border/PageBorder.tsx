import { memo } from 'react'

import styles from './PageBorder.module.scss'

export const PageBorder = memo(() => {
  return (
    <div>
      <div className={styles.top}></div>
      <div className={styles.right}></div>
      <div className={styles.bottom}></div>
      <div className={styles.left}></div>
    </div>
  )
})
