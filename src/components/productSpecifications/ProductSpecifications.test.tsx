import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductSpecifications from './ProductSpecifications';

// Mock the ProductInformation component
jest.mock('../productInformation/ProductInformation', () => (props: any) => (
  <div data-testid='mock-product-information' {...props}></div>
));

describe('ProductSpecifications Component', () => {
  const defaultProps = {
    title: 'Product Specifications',
    description: 'Detailed information about the product.',
    tabs: [
      {
        name: 'Overview',
        title: 'Product Overview',
        description: 'This is the overview of the product.',
        picture: 'https://via.placeholder.com/150',
        items: [
          {
            iconObj: {
              color: 'cyan',
              size: 'md',
              shadow: true,
              shape: 'rounded',
              icon: <svg data-testid='svg-icon'></svg>,
            },
            text: 'High Quality',
          },
        ],
      },
      {
        name: 'Specifications',
        title: 'Product Specifications',
        description: 'These are the specifications of the product.',
        picture: 'https://via.placeholder.com/150',
        items: [
          {
            iconObj: {
              color: 'green',
              size: 'md',
              shadow: true,
              shape: 'rounded',
              icon: <svg data-testid='svg-icon'></svg>,
            },
            text: 'Eco Friendly',
          },
        ],
      },
    ],
  };

  test('renders without crashing', () => {
    render(<ProductSpecifications {...defaultProps} />);
    const title = screen.getByText('Product Specifications');

    expect(title).toBeInTheDocument();
  });

  test('displays the description correctly', () => {
    render(<ProductSpecifications {...defaultProps} />);
    const description = screen.getByText(
      'Detailed information about the product.'
    );

    expect(description).toBeInTheDocument();
  });
});
