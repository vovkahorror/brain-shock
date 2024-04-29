import post1_1 from '../assets/images/posts/post1/1.jpg'
import post1_2 from '../assets/images/posts/post1/2.jpg'
import post1_3 from '../assets/images/posts/post1/3.jpg'
import post1_4 from '../assets/images/posts/post1/4.jpg'
import post1_5 from '../assets/images/posts/post1/5.jpg'
import post1_6 from '../assets/images/posts/post1/6.jpg'
import post1_7 from '../assets/images/posts/post1/7.jpg'
import post2_1 from '../assets/images/posts/post2/1.jpg'
import post2_2 from '../assets/images/posts/post2/2.jpg'
import post2_3 from '../assets/images/posts/post2/3.jpg'
import post2_4 from '../assets/images/posts/post2/4.jpg'
import post2_5 from '../assets/images/posts/post2/5.jpg'
import post2_6 from '../assets/images/posts/post2/6.jpg'
import post2_7 from '../assets/images/posts/post2/7.jpg'
import post2_8 from '../assets/images/posts/post2/8.jpg'
import post2_9 from '../assets/images/posts/post2/9.jpg'
import post3_1 from '../assets/images/posts/post3/1.jpg'
import post3_2 from '../assets/images/posts/post3/2.jpg'
import post3_3 from '../assets/images/posts/post3/3.jpg'
import post3_4 from '../assets/images/posts/post3/4.jpg'
import post3_5 from '../assets/images/posts/post3/5.jpg'
import post3_6 from '../assets/images/posts/post3/6.jpg'
import post3_7 from '../assets/images/posts/post3/7.jpg'
import post4_1 from '../assets/images/posts/post4/1.jpg'
import post5_1 from '../assets/images/posts/post5/1.jpg'

export const posts: PostType[] = [
  {
    condition: 'вживаний',
    description:
      'Консоль вживана, має легкі сліди користування на задній кришці і потертість біля стіка. Екран в ідеалі.  Консоль обслугована, почищена від пилу, свіжа термопаста. Стан  АКБ 93.65% Комплект: консоль, чохол, кп 128 гб. Гарантія на чіповку 6 міс.',
    photos: [post1_1, post1_2, post1_3, post1_4, post1_5, post1_6, post1_7],
    price: 7799,
    title: 'Nintendo Switch Lite',
  },
  {
    condition: 'вживаний',
    description:
      'Консоль вживана, має легкі сліди користування, дисплей має декілька подряпин (постарався передати на фото). Акб в гарному стані, 94.5%. Консоль обслугована, почищена від пилу, свіжа термопаста. Комплект: консоль, чохол, кп 128 гб, оріг зарядка. Гарантія на чіповку 6 міс.',
    photos: [post2_1, post2_2, post2_3, post2_4, post2_5, post2_6, post2_7, post2_8, post2_9],
    price: 7599,
    title: 'Nintendo Switch Lite',
  },
  {
    condition: 'вживаний',
    description:
      'Консоль вживана, має легкі сліди користування на задній кришці. Екран без подряпин. В цілому консоль відчувається новою. Консоль обслугована, почищена від пилу, свіжа термопаста. Стан  АКБ 97.7% Комплект: консоль, чохол, кп 128 гб, оріг зарядка. Гарантія на чіповку 6 міс.',
    photos: [post3_1, post3_2, post3_3, post3_4, post3_5, post3_6, post3_7],
    price: 7999,
    title: 'Nintendo Switch Lite',
  },
  {
    condition: 'новий',
    description:
      'Консоль абсолютно нова, у використанні не була, відкривалась для монтажу чіпа та налаштування. Комплект: повний з усіма прибамбасами, кп 128 гб. Гарантія на чіповку 6 міс.',
    photos: [post4_1],
    price: 12000,
    title: 'Nintendo Switch V2',
  },
  {
    condition: 'новий',
    description:
      'Консолі абсолютно нові, у використанні не були, відкривались для монтажу чіпа та налаштування. Комплект: повний з усіма прибамбасами, кп 128 гб. Гарантія на чіповку 6 міс.',
    photos: [post5_1],
    price: 16299,
    title: 'Nintendo Switch OLED Red Mario Special Edition',
  },
]

export type PostType = {
  condition: 'вживаний' | 'новий'
  description: string
  photos: string[]
  price: number
  title: string
}
