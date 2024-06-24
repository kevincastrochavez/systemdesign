import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductCard from './ProductCard';
import { ProductCardProps } from '../../utils/types';

// Mocking the child components
jest.mock('../colorSwatches/ColorSwatches', () => (props: any) => (
  <div data-testid='mock-color-swatches'>
    {props.colorsObj.map((color: any) => (
      <p>{color.color}</p>
    ))}
  </div>
));
jest.mock('../price/Price', () => (props: any) => (
  <div data-testid='mock-price'>
    {props.originalPrice} - {props.discountedPrice}
  </div>
));

const defaultProps: ProductCardProps = {
  imgInfo: {
    src: 'https://via.placeholder.com/300',
    alt: 'Product Image',
  },
  name: 'Sample Product',
  price: {
    originalPrice: 100,
    discountedPrice: 80,
  },
  colorSwatchesProps: {
    colorsObj: [
      { color: 'red', outOfStock: false },
      { color: 'blue', outOfStock: true },
    ],
    space: 'md',
    shape: 'rounded',
    orientation: 'horizontal',
  },
};

describe('ProductCard Component', () => {
  test('displays the product name', () => {
    render(<ProductCard {...defaultProps} />);
    const productName = screen.getByText('Sample Product');

    expect(productName).toBeInTheDocument();
  });

  test('renders the Price component with correct props', () => {
    render(<ProductCard {...defaultProps} />);
    const priceComponent = screen.getByTestId('mock-price');
    const originalPrice = screen.getByText(/100/);
    const discountedPrice = screen.getByText(/80/);

    expect(priceComponent).toBeInTheDocument();
    expect(originalPrice).toBeInTheDocument();
    expect(discountedPrice).toBeInTheDocument();
  });

  test('renders the ColorSwatches component with correct props', () => {
    render(<ProductCard {...defaultProps} />);
    const colorSwatchesComponent = screen.getByTestId('mock-color-swatches');
    const redColor = screen.getByText('red');
    const blueColor = screen.getByText('blue');

    expect(colorSwatchesComponent).toBeInTheDocument();
    expect(redColor).toBeInTheDocument();
    expect(blueColor).toBeInTheDocument();
  });
});
