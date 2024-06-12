import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Price from './Price';
import { PriceProps } from '../../utils/types';

describe('Price Component', () => {
  const defaultProps: PriceProps = {
    originalPrice: 100,
    discountedPrice: 80,
  };

  test('renders without crashing', () => {
    render(<Price {...defaultProps} />);
    const price = screen.getByText('$100');
    const discountedPrice = screen.getByText('$80');

    expect(price).toBeInTheDocument();
    expect(discountedPrice).toBeInTheDocument();
  });

  test('displays discounted price and original price with strikethrough', () => {
    render(<Price {...defaultProps} />);
    const discountedPrice = screen.getByText('$80');
    const originalPrice = screen.getByText('$100');

    expect(discountedPrice).toBeInTheDocument();
    expect(originalPrice).toBeInTheDocument();
    expect(originalPrice).toHaveStyle('text-decoration: line-through');
  });

  test('displays only original price if discounted price is not provided', () => {
    render(<Price originalPrice={100} />);
    const originalPrice = screen.getByText('$100');
    const discountedPrice = screen.queryByText('$80');

    expect(originalPrice).toBeInTheDocument();
    expect(discountedPrice).not.toBeInTheDocument();
    expect(originalPrice).not.toHaveStyle('text-decoration: line-through');
  });
});
