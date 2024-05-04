import { NavLink } from 'react-router-dom'

import { useNavigation } from '@/common/hooks/useNavigation'
import { PostType } from '@/data/posts'

import styles from './Post.module.scss'

export const Post = ({ post }: PostProps) => {
  const { setNavigationProps } = useNavigation()
  const { condition, description, photos, price, title } = post

  const handleClick = () => setNavigationProps({ post })

  return (
    <article className={styles.post}>
      <div
        className={styles.image}
        onClick={handleClick}
        style={{ backgroundImage: `url(${photos[0]})` }}
      >
        <NavLink className={styles.title} onClick={handleClick} to={'/detailed-post'} />
      </div>
      <div>
        <h2>
          <NavLink className={styles.title} onClick={handleClick} to={'/detailed-post'}>
            {title}
          </NavLink>
        </h2>
        <span className={styles.price}>{price} грн</span>
        <span className={styles.condition}>стан: {condition}</span>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  )
}

interface PostProps {
  post: PostType
}
