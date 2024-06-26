import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductGrid from './ProductGrid';
import { ProductCardProps, ProductGridProps } from '../../utils/types';

// Mocking the ProductCard component
jest.mock('../productCard/ProductCard', () => (props: ProductCardProps) => (
  <div data-testid='mock-product-card'>
    <p>Name: {props.name}</p>
    <p>Price: {props.price.originalPrice}</p>
    <p>ColorSwatchesProps: {JSON.stringify(props.colorSwatchesProps)}</p>
  </div>
));

const defaultProps: ProductGridProps = {
  products: [
    {
      imgInfo: {
        src: 'https://via.placeholder.com/300',
        alt: 'Product 1',
      },
      name: 'Product 1',
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
    },
    {
      imgInfo: {
        src: 'https://via.placeholder.com/300',
        alt: 'Product 2',
      },
      name: 'Product 2',
      price: {
        originalPrice: 150,
        discountedPrice: 120,
      },
      colorSwatchesProps: {
        colorsObj: [
          { color: 'green', outOfStock: false },
          { color: 'yellow', outOfStock: true },
        ],
        space: 'md',
        shape: 'rounded',
        orientation: 'horizontal',
      },
    },
  ],
};

describe('ProductGrid Component', () => {
  test('renders without crashing', () => {
    render(<ProductGrid {...defaultProps} />);
    const productCards = screen.getAllByTestId('mock-product-card');

    expect(productCards).toHaveLength(defaultProps.products.length);
  });

  test('displays the price of all products', () => {
    render(<ProductGrid {...defaultProps} />);
    const productPrices = defaultProps.products.map((product) => {
      return screen.getByText(`Price: ${product.price.originalPrice}`);
    });

    expect(productPrices).toHaveLength(defaultProps.products.length);
    productPrices.forEach((productPrice) => {
      expect(productPrice).toBeInTheDocument();
    });
  });
});
