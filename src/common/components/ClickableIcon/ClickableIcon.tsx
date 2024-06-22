import { ElementType, memo } from 'react'

import styles from './ClickableIcon.module.scss'

export const ClickableIcon = memo(({ Icon, link }: ClickableIconProps) => {
  return (
    <div>
      <a className={styles.link} href={link} rel={'noreferrer'} target={'_blank'}>
        <span className={styles.iconWrapperTop}>
          <Icon className={styles.icon} />
        </span>
        <span className={styles.iconWrapperBottom}>
          <Icon className={styles.icon} />
        </span>
      </a>
    </div>
  )
})

interface ClickableIconProps {
  Icon: ElementType
  link: string
}
