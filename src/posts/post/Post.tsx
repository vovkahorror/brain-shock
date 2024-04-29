import { PostType } from '@/data/posts'

import styles from './Post.module.scss'

export const Post = ({ post }: PostProps) => {
  const { condition, description, photos, price, title } = post

  return (
    <article className={styles.post}>
      <div className={styles.image} style={{ backgroundImage: `url(${photos[0]})` }}></div>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <span>{price} грн</span>
        <span>стан: {condition}</span>
        <p>{description}</p>
      </div>
    </article>
  )
}

interface PostProps {
  post: PostType
}
