import styles from './Chipping.module.scss'

export const Chipping = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.paragraph}>
          <span className={styles.header}>
            Якщо Ви вирішили прочіпувати власного Switch'a, то вартість послуги складає:
          </span>
          <ul className={styles.list}>
            <li>
              Nintendo Switch V1, V2 – <span className={styles.price}>1500 грн</span>
            </li>
            <li>
              Nintendo Switch Lite – <span className={styles.price}>2000 грн</span>
            </li>
            <li>
              Nintendo Switch OLED – <span className={styles.price}>3300 грн</span>
            </li>
          </ul>
          <span className={styles.details}>
            У вартість входить повне налаштування разом з бекапом, емунандом. Чистка від пилу,
            свіженька термопаста. Гарантія на роботу та чіп – 6 місяців.
          </span>
        </div>
      </div>
    </section>
  )
}
