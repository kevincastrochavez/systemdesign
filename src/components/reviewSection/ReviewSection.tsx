/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { IconMessage } from '@tabler/icons-react';

import { COLORS } from '../../utils/constants';
import Rating from '../rating/Rating';
import RatingCategoryGroup from '../ratingCategoryGroup/RatingCategoryGroup';
import Button from '../button/Button';
import Review from '../review/Review';
import EmptyState from '../emptyState/EmptyState';
import { ReviewProps, ReviewSectionProps } from '../../utils/types';

const reviewSectionContainerCss = css`
  font-family: 'Noto Sans', sans-serif;
  display: grid;
  gap: 40px;
  max-width: 1256px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const reviewSectionLeftContainerCss = css`
  display: grid;
  gap: 24px;
  height: fit-content;

  @media (min-width: 768px) {
    position: sticky;
    top: 40px;
  }

  & > button {
    justify-self: center;
  }
`;

const reviewSectionHeadingCss = css`
  display: grid;
  gap: 8px;

  h2 {
    margin: 0;
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
  }
`;

const reviewSectionHeadingRatingCss = css`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 14px;
    line-height: 20px;
    color: ${COLORS.secondaryText};
  }
`;

const reviewSectionRightContainerCss = css`
  height: fit-content;
  align-self: center;
  display: grid;
  gap: 32px;

  & > button {
    margin-top: 24px;
  }
`;

/**
 * @param {Array} reviews - array of reviews
 * @returns {JSX} - review section
 */
function ReviewSection({ reviews }: ReviewSectionProps) {
  const [reviewsToShow, setReviewsToShow] = useState(10);

  const numberOfReviews = reviews.length;
  const { ratingAverage } = getRatingAverage(reviews);

  const { ratingCategories } = calculateRatingCategories(reviews);
  console.log(ratingCategories);

  const reviewsFormatted = reviews?.map((review: any) => ({
    ...review,
    date: formatDate(review.date),
  }));

  const reviewsToDisplay = reviewsFormatted.slice(0, reviewsToShow);

  return (
    <div css={reviewSectionContainerCss}>
      <div css={reviewSectionLeftContainerCss}>
        <div css={reviewSectionHeadingCss}>
          <h2>Overall Rating</h2>

          <div css={reviewSectionHeadingRatingCss}>
            <p>{ratingAverage}</p>
            <Rating rating={ratingAverage} />
            {reviews.length > 0 && (
              <span>Based on {numberOfReviews} reviews</span>
            )}
          </div>
        </div>

        <RatingCategoryGroup ratingCategories={ratingCategories} />

        <Button text='Write a Review' width='fit-content' variant='default' />
      </div>
      <div css={reviewSectionRightContainerCss}>
        {reviewsToDisplay.map((review: any) => (
          <Review key={review.id} {...review} />
        ))}

        {reviews.length > reviewsToShow && (
          <Button
            text={
              reviews.length - reviewsToShow > 10
                ? 'Show 10 more reviews'
                : `Show ${reviews.length - reviewsToShow} more reviews`
            }
            variant='default'
            onclick={() => setReviewsToShow(reviewsToShow + 10)}
          />
        )}

        {reviews.length === 0 && (
          <EmptyState
            title='No reviews yet!'
            description='Be the first to review this product'
            iconObj={{
              color: 'cyan',
              size: 'md',
              shadow: true,
              shape: 'rounded',
              icon: <IconMessage />,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ReviewSection;

// PRIVATE FUNCTIONS

/**
 * @param {Array} reviews - array of reviews
 * @returns {Object} - rating categories
 */
const calculateRatingCategories = (reviews: any) => {
  if (reviews.length === 0)
    return {
      ratingCategories: [
        {
          name: 'Excellent',
          progressBar: {
            value: 0,
            qualityLevel: 'excellent',
          },
        },
        {
          name: 'Good',
          progressBar: {
            value: 0,
            qualityLevel: 'good',
          },
        },
        {
          name: 'Average',
          progressBar: {
            value: 0,
            qualityLevel: 'average',
          },
        },
        {
          name: 'Below Average',
          progressBar: {
            value: 0,
            qualityLevel: 'belowAverage',
          },
        },
        {
          name: 'Poor',
          progressBar: {
            value: 0,
            qualityLevel: 'poor',
          },
        },
      ],
    };

  const categories: { [key: string]: number } = {
    excellent: 0,
    good: 0,
    average: 0,
    belowAverage: 0,
    poor: 0,
  };

  reviews.forEach((review: any) => {
    if (review.rating >= 4) {
      categories.excellent++;
    } else if (review.rating >= 3) {
      categories.good++;
    } else if (review.rating >= 2) {
      categories.average++;
    } else if (review.rating >= 1) {
      categories.belowAverage++;
    } else {
      categories.poor++;
    }
  });

  const totalReviews = reviews.length;

  const ratingCategories = [
    {
      name: 'Excellent',
      progressBar: {
        value: (categories.excellent / totalReviews) * 100,
        qualityLevel: 'excellent',
      },
    },
    {
      name: 'Good',
      progressBar: {
        value: (categories.good / totalReviews) * 100,
        qualityLevel: 'good',
      },
    },
    {
      name: 'Average',
      progressBar: {
        value: (categories.average / totalReviews) * 100,
        qualityLevel: 'average',
      },
    },
    {
      name: 'Below Average',
      progressBar: {
        value: (categories.belowAverage / totalReviews) * 100,
        qualityLevel: 'belowAverage',
      },
    },
    {
      name: 'Poor',
      progressBar: {
        value: (categories.poor / totalReviews) * 100,
        qualityLevel: 'poor',
      },
    },
  ];

  return { ratingCategories };
};

/**
 * @param {Date} date - date of the review
 * @returns {String} - formatted date
 */
const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

/**
 * @param {Array} reviews - array of reviews
 * @returns {Object} - rating average
 */
const getRatingAverage = (reviews: any) => {
  if (reviews.length === 0) return { ratingAverage: 0 };

  const ratingAverage =
    Number(
      (
        reviews?.reduce((acc: any, curr: any) => acc + curr.rating, 0) /
        reviews.length
      ).toFixed(1)
    ) || 0;

  return { ratingAverage };
};
