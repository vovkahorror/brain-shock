import { reviews } from '@/data/reviews'

export const validPriceDate = new Date(2025, 11, 31)

export const reviewsList = reviews.map(review => ({
  '@type': 'Review',
  author: { '@type': 'Person', givenName: review.name },
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
    },
    transitTime: {
      '@type': 'QuantitativeValue',
      maxValue: 2,
      minValue: 1,
    },
  },
  shippingDestination: {
    '@type': 'DefinedRegion',
    addressCountry: 'UA',
  },
  shippingRate: {
    '@type': 'MonetaryAmount',
    currency: 'UAH',
    value: true,
  },
}

export const hasMerchantReturnPolicy = {
  '@type': 'MerchantReturnPolicy',
  applicableCountry: 'UA',
  name: 'Політика повернення',
  returnPolicyCategory: 'https://schema.org/ReturnShippingFees',
  returnPolicyCountry: 'UA',
}
