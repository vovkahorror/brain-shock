import { reviews } from '@/data/reviews'

export const validPriceDate = new Date(2025, 11, 31)

export const reviewsList = reviews.map(review => ({
  '@type': 'Review',
  author: { '@type': 'Person', name: review.name },
  datePublished: review.date,
  reviewBody: review.comment,
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '5',
  },
}))

export const shippingDetails = {
  '@type': 'OfferShippingDetails',
  deliveryTime: {
    businessDays: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'https://schema.org/Monday',
        'https://schema.org/Tuesday',
        'https://schema.org/Wednesday',
        'https://schema.org/Thursday',
        'https://schema.org/Friday',
        'https://schema.org/Saturday',
        'https://schema.org/Sunday',
      ],
    },
    handlingTime: {
      '@type': 'QuantitativeValue',
      maxValue: 1,
      minValue: 1,
      unitCode: 'DAY',
    },
    transitTime: {
      '@type': 'QuantitativeValue',
      maxValue: 2,
      minValue: 1,
      unitCode: 'DAY',
    },
  },
  shippingDestination: {
    '@type': 'DefinedRegion',
    addressCountry: 'UA',
  },
  shippingRate: {
    '@type': 'MonetaryAmount',
    currency: 'UAH',
    value: 130,
  },
}

export const hasMerchantReturnPolicy = {
  '@type': 'MerchantReturnPolicy',
  applicableCountry: 'UA',
  merchantReturnDays: [
    'https://schema.org/Monday',
    'https://schema.org/Tuesday',
    'https://schema.org/Wednesday',
    'https://schema.org/Thursday',
    'https://schema.org/Friday',
    'https://schema.org/Saturday',
    'https://schema.org/Sunday',
  ],
  name: 'Політика повернення',
  returnFees: 'OriginalShippingFees',
  returnMethod: 'ReturnByMail',
  returnPolicyCategory: 'MerchantReturnFiniteReturnWindow',
  returnPolicyCountry: 'UA',
}
