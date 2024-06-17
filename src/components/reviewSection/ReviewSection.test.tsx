import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ReviewSection from './ReviewSection';
import { ReviewProps } from '../../utils/types';

// Mock subcomponents to focus on testing ReviewSection
jest.mock('../rating/Rating', () => (props: any) => (
  <div data-testid='mock-rating' {...props}></div>
));
jest.mock('../ratingCategoryGroup/RatingCategoryGroup', () => (props: any) => (
  <div data-testid='mock-rating-category-group' {...props}></div>
));
jest.mock('../review/Review', () => (props: any) => (
  <div data-testid='mock-review' {...props}></div>
));
jest.mock('../emptyState/EmptyState', () => (props: any) => (
  <div data-testid='mock-empty-state' {...props}></div>
));
jest.mock('../button/Button', () => (props: any) => (
  <button data-testid='mock-button' {...props}></button>
));

describe('ReviewSection Component', () => {
  const reviews: ReviewProps[] = [
    {
      id: '1',
      name: 'Kevin Castro',
      rating: 5,
      date: new Date(2023, 0, 1),
      text: "I've worn it everywhere, super durable and fashionable.",
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/1.jpg',
        alt: 'Kevin Castro at the Sand Dunes',
      },
    },
    {
      id: '2',
      name: 'Sophia Lee',
      rating: 4.5,
      date: new Date(2023, 1, 2),
      text: 'A bit uncomfortable at first, but they broke in nicely.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/2.jpg',
        alt: 'Sophia Lee enjoying a sunset hike',
      },
    },
    // Add more review objects as needed for testing
  ];

  test('renders without crashing', () => {
    render(<ReviewSection reviews={reviews} />);
    const title = screen.getByText('Overall Rating');

    expect(title).toBeInTheDocument();
  });

  test('displays overall rating and number of reviews correctly', () => {
    render(<ReviewSection reviews={reviews} />);
    const overallRating = screen.getByText('4.8'); // Average rating
    const basedOnReviews = screen.getByText(/Based on 2 reviews/);

    expect(overallRating).toBeInTheDocument();
    expect(basedOnReviews).toBeInTheDocument();
  });

  test('renders the correct number of reviews', () => {
    render(<ReviewSection reviews={reviews} />);
    const reviewComponents = screen.getAllByTestId('mock-review');

    expect(reviewComponents).toHaveLength(2);
  });

  test('renders RatingCategoryGroup with correct props', () => {
    render(<ReviewSection reviews={reviews} />);
    const ratingCategoryGroup = screen.getByTestId(
      'mock-rating-category-group'
    );
    expect(ratingCategoryGroup).toBeInTheDocument();
  });
});
