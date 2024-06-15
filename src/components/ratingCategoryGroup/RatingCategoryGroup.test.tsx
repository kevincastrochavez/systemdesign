import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import RatingCategoryGroup from './RatingCategoryGroup';
import { RatingCategoryGroupProps } from '../../utils/types';

// Mock RatingCategory component to simplify testing
jest.mock('../ratingCategory/RatingCategory', () => (props: any) => (
  <div data-testid='mock-rating-category' {...props}></div>
));

describe('RatingCategoryGroup Component', () => {
  const defaultProps: RatingCategoryGroupProps = {
    ratingCategories: [
      {
        name: 'Service Quality',
        progressBar: { value: 75, qualityLevel: 'good' },
      },
      {
        name: 'Responsiveness',
        progressBar: { value: 60, qualityLevel: 'average' },
      },
      {
        name: 'Professionalism',
        progressBar: { value: 90, qualityLevel: 'excellent' },
      },
    ],
  };

  test('renders without crashing', () => {
    render(<RatingCategoryGroup {...defaultProps} />);
    const ratingCategories = screen.getAllByTestId('mock-rating-category');

    expect(ratingCategories).toHaveLength(3);
  });
});
