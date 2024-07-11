import { ElementType, memo } from 'react'

import styles from './ClickableIcon.module.scss'

export const ClickableIcon = memo(({ Icon, link, name }: ClickableIconProps) => {
  return (
    <button aria-label={name} className={styles.button}>
      <a className={styles.link} href={link} rel={'noreferrer'} target={'_blank'}>
        <span className={styles.iconWrapperTop}>
          <Icon className={styles.icon} />
        </span>
        <span className={styles.iconWrapperBottom}>
          <Icon className={styles.icon} />
        </span>
      </a>
    </button>
  )
})

interface ClickableIconProps {
  Icon: ElementType
  link: string
  name: string
}
