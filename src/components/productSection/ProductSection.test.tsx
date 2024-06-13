import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductSection from './ProductSection';
import { ProductSectionProps } from '../../utils/types';
import { COLORS } from '../../utils/constants';

const MockProductComponent = ({
  name,
  price,
}: {
  name: string;
  price: number;
}) => (
  <div data-testid='mock-product-component'>
    <h4>{name}</h4>
    <p>${price}</p>
  </div>
);

describe('ProductSection Component', () => {
  const defaultProps: ProductSectionProps = {
    title: 'Product Section Title',
    productComponent: MockProductComponent,
    productOptions: { name: 'Mock Product', price: 49.99 },
  };

  test('renders without crashing', () => {
    render(<ProductSection {...defaultProps} />);
    const title = screen.getByText('Product Section Title');

    expect(title).toBeInTheDocument();
  });

  test('renders the passed product component', () => {
    render(<ProductSection {...defaultProps} />);
    const productComponent = screen.getByTestId('mock-product-component');

    expect(productComponent).toBeInTheDocument();
  });

  test('passes product options to the product component', () => {
    render(<ProductSection {...defaultProps} />);
    const productName = screen.getByText('Mock Product');
    const productPrice = screen.getByText('$49.99');

    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
  });

  test('renders without product options if none provided', () => {
    const noOptionsProps: ProductSectionProps = {
      title: 'No Options Title',
      productComponent: MockProductComponent,
      productOptions: { name: '', price: 0 },
    };

    render(<ProductSection {...noOptionsProps} />);
    const title = screen.getByText('No Options Title');
    const productComponent = screen.getByTestId('mock-product-component');
    const productPrice = screen.queryByText('$0');

    expect(title).toBeInTheDocument();
    expect(productComponent).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
  });
});
