import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductDetails from './ProductDetails'; // Adjust the import path according to your file structure
import { ProductDetailsProps } from '../../utils/types';

// Mocking child components to simplify tests
jest.mock('../gallery/Gallery', () => (props: any) => (
  <div data-testid='gallery' {...props} />
));
jest.mock('../button/Button', () => (props: any) => (
  <button data-testid='button' {...props} />
));
jest.mock('../productSection/ProductSection', () => (props: any) => (
  <div data-testid='product-section' {...props} />
));
jest.mock('../price/Price', () => (props: any) => (
  <div data-testid='price' {...props} />
));
jest.mock('../chip/Chip', () => (props: any) => (
  <div data-testid='chip' {...props} />
));
jest.mock('../rating/Rating', () => (props: any) => (
  <div data-testid='rating' {...props} />
));
jest.mock('../moreButton/MoreButton', () => (props: any) => (
  <button data-testid='more-button' {...props} />
));
jest.mock('../accordion/Accordion', () => (props: any) => (
  <div data-testid='accordion' {...props} />
));

describe('ProductDetails Component', () => {
  const defaultProps: ProductDetailsProps = {
    images: [
      { src: 'image1.jpg', alt: 'Image 1' },
      { src: 'image2.jpg', alt: 'Image 2' },
    ],
    title: 'Test Product',
    price: { originalPrice: 100, discountedPrice: 80 },
    discountBadge: { text: '20% OFF', color: 'green' },
    ratingObj: { rating: 4.5 },
    link: { to: '#', text: 'See all reviews' },
    description: 'This is a test product description.',
    productSections: [
      { title: 'Section 1', productComponent: jest.fn(), productOptions: {} },
      { title: 'Section 2', productComponent: jest.fn(), productOptions: {} },
    ],
    button: { text: 'Add to Cart', onclick: jest.fn() },
    accordionFeatures: [
      {
        title: 'Feature 1',
        content: ['Feature 1 detail 1', 'Feature 1 detail 2'],
      },
      {
        title: 'Feature 2',
        content: ['Feature 2 detail 1', 'Feature 2 detail 2'],
      },
    ],
  };

  test('renders without crashing', () => {
    render(<ProductDetails {...defaultProps} />);
    const title = screen.getByText('Test Product');

    expect(title).toBeInTheDocument();
  });

  test('renders Gallery with correct props', () => {
    render(<ProductDetails {...defaultProps} />);
    const gallery = screen.getByTestId('gallery');

    expect(gallery).toBeInTheDocument();
  });

  test('renders Price with correct props', () => {
    render(<ProductDetails {...defaultProps} />);
    const price = screen.getByTestId('price');

    expect(price).toBeInTheDocument();
    expect(price).toHaveAttribute('originalprice', '100');
    expect(price).toHaveAttribute('discountedprice', '80');
  });

  test('renders discount badge if provided', () => {
    render(<ProductDetails {...defaultProps} />);
    const discountBadge = screen.getByTestId('chip');

    expect(discountBadge).toBeInTheDocument();
  });

  test('renders product sections with correct props', () => {
    render(<ProductDetails {...defaultProps} />);
    const sections = screen.getAllByTestId('product-section');

    expect(sections).toHaveLength(2);
  });

  test('renders Button with correct props', () => {
    render(<ProductDetails {...defaultProps} />);
    const button = screen.getByTestId('button');

    expect(button).toBeInTheDocument();
  });

  test('renders Accordion features with correct props', () => {
    render(<ProductDetails {...defaultProps} />);
    const accordions = screen.getAllByTestId('accordion');

    expect(accordions).toHaveLength(2);
  });

  test('renders rating and link with correct props', () => {
    render(<ProductDetails {...defaultProps} />);
    const rating = screen.getByTestId('rating');
    const moreButton = screen.getByTestId('more-button');

    expect(rating).toBeInTheDocument();
    expect(moreButton).toBeInTheDocument();
  });

  test('renders product description correctly', () => {
    render(<ProductDetails {...defaultProps} />);
    const description = screen.getByText('This is a test product description.');

    expect(description).toBeInTheDocument();
  });
});
