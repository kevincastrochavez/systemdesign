import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Review from './Review';
import { ReviewProps } from '../../utils/types';

// Mock Avatar and Rating components to simplify testing
jest.mock('../avatar/Avatar', () => (props: any) => (
  <div data-testid='mock-avatar' {...props}></div>
));
jest.mock('../rating/Rating', () => (props: any) => (
  <div data-testid='mock-rating' {...props}></div>
));

describe('Review Component', () => {
  const defaultProps: ReviewProps = {
    name: 'Kevin Castro',
    date: '2023-05-23',
    rating: 4.5,
    text: 'This product is fantastic! I have been using it for a few months now and it has exceeded my expectations.',
    avatar: { src: 'avatar.jpg', alt: 'Kevin Castro' },
  };

  test('renders without crashing', () => {
    render(<Review {...defaultProps} />);
    const name = screen.getByText('Kevin Castro');
    const date = screen.getByText('2023-05-23');
    const rating = screen.getByTestId('mock-rating');
    const text = screen.getByText(
      'This product is fantastic! I have been using it for a few months now and it has exceeded my expectations.'
    );
    const avatar = screen.getByTestId('mock-avatar');

    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
  });
});
