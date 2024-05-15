import { descriptionNew, descriptionUsed } from '@/common/consts/descriptions'

import new_lite_01 from '../assets/images/consoles/new/lite/new_lite_01.webp'
import new_lite_02 from '../assets/images/consoles/new/lite/new_lite_02.webp'
import new_lite_03 from '../assets/images/consoles/new/lite/new_lite_03.webp'
import new_lite_04 from '../assets/images/consoles/new/lite/new_lite_04.webp'
import new_lite_05 from '../assets/images/consoles/new/lite/new_lite_05.webp'
import new_lite_06 from '../assets/images/consoles/new/lite/new_lite_06.webp'
import new_lite_07 from '../assets/images/consoles/new/lite/new_lite_07.webp'
import new_oled_01 from '../assets/images/consoles/new/oled/new_oled_01.webp'
import new_oled_02 from '../assets/images/consoles/new/oled/new_oled_02.webp'
import new_oled_03 from '../assets/images/consoles/new/oled/new_oled_03.webp'
import new_oled_04 from '../assets/images/consoles/new/oled/new_oled_04.webp'
import new_oled_05 from '../assets/images/consoles/new/oled/new_oled_05.webp'
import new_oled_06 from '../assets/images/consoles/new/oled/new_oled_06.webp'
import new_oled_07 from '../assets/images/consoles/new/oled/new_oled_07.webp'
import new_oled_08 from '../assets/images/consoles/new/oled/new_oled_08.webp'
import new_v2_01 from '../assets/images/consoles/new/v2/new_v2_01.webp'
import new_v2_02 from '../assets/images/consoles/new/v2/new_v2_02.webp'
import new_v2_03 from '../assets/images/consoles/new/v2/new_v2_03.webp'
import new_v2_04 from '../assets/images/consoles/new/v2/new_v2_04.webp'
import new_v2_05 from '../assets/images/consoles/new/v2/new_v2_05.webp'
import new_v2_06 from '../assets/images/consoles/new/v2/new_v2_06.webp'
import new_v2_07 from '../assets/images/consoles/new/v2/new_v2_07.webp'
import new_v2_08 from '../assets/images/consoles/new/v2/new_v2_08.webp'
import used_oled_white_01 from '../assets/images/consoles/used/oled/white/used_oled_white_01.webp'
import used_oled_white_02 from '../assets/images/consoles/used/oled/white/used_oled_white_02.webp'
import used_oled_white_03 from '../assets/images/consoles/used/oled/white/used_oled_white_03.webp'
import used_oled_white_04 from '../assets/images/consoles/used/oled/white/used_oled_white_04.webp'
import used_oled_white_05 from '../assets/images/consoles/used/oled/white/used_oled_white_05.webp'
import used_oled_white_06 from '../assets/images/consoles/used/oled/white/used_oled_white_06.webp'
import used_oled_white_07 from '../assets/images/consoles/used/oled/white/used_oled_white_07.webp'
import used_oled_white_08 from '../assets/images/consoles/used/oled/white/used_oled_white_08.webp'
import used_oled_white_09 from '../assets/images/consoles/used/oled/white/used_oled_white_09.webp'
import used_oled_white_10 from '../assets/images/consoles/used/oled/white/used_oled_white_10.webp'

export const posts: PostsDataType = {
  new: [
    {
      condition: 'новий',
      description:
        'Nintendo Switch OLED найдовше тримає заряд акумулятора і, порівняно з іншими портативками цього бренду, має найбільший і найсоковитіший дисплей, покращену збірку та конструкцію корпуса, та кращий звук в лінійці.\n' +
        descriptionNew,
      photos: [
        new_oled_01,
        new_oled_02,
        new_oled_03,
        new_oled_04,
        new_oled_05,
        new_oled_06,
        new_oled_07,
        new_oled_08,
      ],
      price: 15999,
      title: 'Nintendo Switch OLED',
    },
    {
      condition: 'новий',
      description:
        'Консоль Nintendo Switch V2, або, як ще її називають, оновлена версія, має кращий процесор порівняно з попередньою ревізією (16 нм проти 20 нм порівняно з першою ревізією). Це вам, як користувачеві, дає перевагу у вигляді відчутно збільшеної автономності, а, відповідно, консоль ви будете рідше заряджати і строк служби акумулятора довший. Консоль менше гріється, кулер працює тихіше, менше втягує пилу, відповідно консоль послугує довше. В останніх масштабних іграх продуктивність краща.\n' +
        descriptionNew,
      photos: [
        new_v2_01,
        new_v2_02,
        new_v2_03,
        new_v2_04,
        new_v2_05,
        new_v2_06,
        new_v2_07,
        new_v2_08,
      ],
      price: 12499,
      title: 'Nintendo Switch V2',
    },
    {
      condition: 'новий',
      description: 'Портативна консоль Nintendo Switch Lite.\n' + descriptionNew,
      photos: [
        new_lite_01,
        new_lite_02,
        new_lite_03,
        new_lite_04,
        new_lite_05,
        new_lite_06,
        new_lite_07,
      ],
      price: '10199-10499',
      title: 'Nintendo Switch Lite',
    },
  ],
  used: [
    {
      color: 'white',
      condition: 'вживаний',
      description:
        'Консоль вживана має гарний косметичний стан, консоль немає дефектів чи якихось проблем. З переду ідеал, на екрані без подряпин. На задній кришці є легкі потертості.\n' +
        descriptionUsed,
      photos: [
        used_oled_white_01,
        used_oled_white_02,
        used_oled_white_03,
        used_oled_white_04,
        used_oled_white_05,
        used_oled_white_06,
        used_oled_white_07,
        used_oled_white_08,
        used_oled_white_09,
        used_oled_white_10,
      ],
      price: 13999,
      title: 'Nintendo Switch OLED White',
    },
  ],
}

export type PostsDataType = {
  new: PostType[]
  used: PostType[]
}

export type PostType = {
  color?: string
  condition: 'вживаний' | 'новий'
  description: string
  photos: string[]
  price: number | string
  title: string
}
