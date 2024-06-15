import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import RatingCategory from './RatingCategory';
import { RatingCategoryProps } from '../../utils/types';

describe('RatingCategory Component', () => {
  const defaultProps: RatingCategoryProps = {
    name: 'Service Quality',
    progressBar: { value: 75, qualityLevel: 'good' },
  };

  test('renders without crashing', () => {
    render(<RatingCategory {...defaultProps} />);
    const name = screen.getByText('Service Quality');

    expect(name).toBeInTheDocument();
  });

  test('displays the correct percentage value', () => {
    render(<RatingCategory {...defaultProps} />);
    const percentage = screen.getByText('75%');

    expect(percentage).toBeInTheDocument();
  });
});
