import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Rating from './Rating';

// Helper function to get the width style of a star
const getStarWidth = (star: HTMLElement) =>
  star.style.getPropertyValue('--width');

describe('Rating Component', () => {
  it('renders the correct number of stars', () => {
    const { container } = render(<Rating rating={3.5} size='md' />);
    const stars = container.querySelectorAll('span');

    expect(stars.length).toBe(5);
  });

  it('applies correct size based on the size prop', () => {
    const { container } = render(<Rating rating={2.5} size='lg' />);
    const star = container.querySelector('span');

    expect(star).toHaveAttribute('data-size', 'lg');
  });

  it('fills the stars according to the rating', () => {
    const { container } = render(<Rating rating={3.5} size='sm' />);
    const stars = container.querySelectorAll('span');

    // Check each star's width
    expect(getStarWidth(stars[0])).toBe('100%');
    expect(getStarWidth(stars[1])).toBe('100%');
    expect(getStarWidth(stars[2])).toBe('100%');
    expect(getStarWidth(stars[3])).toBe('50%');
    expect(getStarWidth(stars[4])).toBe('0%');
  });

  it('handles whole number ratings correctly', () => {
    const { container } = render(<Rating rating={4} size='sm' />);
    const stars = container.querySelectorAll('span');

    // Check each star's width
    expect(getStarWidth(stars[0])).toBe('100%');
    expect(getStarWidth(stars[1])).toBe('100%');
    expect(getStarWidth(stars[2])).toBe('100%');
    expect(getStarWidth(stars[3])).toBe('100%');
    expect(getStarWidth(stars[4])).toBe('0%');
  });

  it('handles zero rating correctly', () => {
    const { container } = render(<Rating rating={0} size='sm' />);
    const stars = container.querySelectorAll('span');

    // Check each star's width
    stars.forEach((star) => {
      expect(getStarWidth(star)).toBe('0%');
    });
  });

  it('applies different star sizes correctly', () => {
    const { container } = render(<Rating rating={2.5} size='xl' />);
    const star = container.querySelector('span');

    expect(star).toHaveStyle({ width: '32px', height: '32px' });
  });
});
