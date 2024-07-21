import { reviews } from '@/data/reviews'

export const validPriceDate = new Date(2025, 11, 31)

export const reviewsList = reviews.map(review => ({
  '@type': 'Review',
  author: review.name,
  datePublished: review.date,
  reviewBody: review.comment,
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '5',
  },
}))
