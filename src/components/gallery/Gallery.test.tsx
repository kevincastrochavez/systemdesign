import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Gallery from './Gallery';
import { GalleryProps } from '../../utils/types';

// Mock LazyLoadImage to avoid actual lazy loading in tests
jest.mock('react-lazy-load-image-component', () => ({
  LazyLoadImage: (props: any) => <img {...props} />,
}));

describe('Gallery Component', () => {
  const defaultProps: any = {
    images: [
      { src: 'image1.jpg', alt: 'Image 1' },
      { src: 'image2.jpg', alt: 'Image 2' },
      { src: 'image3.jpg', alt: 'Image 3' },
    ],
  };

  test('renders without crashing', () => {
    render(<Gallery {...defaultProps} />);
    const imageOne = screen.getAllByAltText('Image 1');
    const imageTwo = screen.getByAltText('Image 2');
    const imageThree = screen.getByAltText('Image 3');

    expect(imageOne).toHaveLength(2);
    expect(imageTwo).toBeInTheDocument();
    expect(imageThree).toBeInTheDocument();
  });

  test('displays main image based on state', () => {
    render(<Gallery {...defaultProps} />);
    let mainImage = screen.getAllByAltText('Image 1');
    let secondImage = screen.getAllByAltText('Image 2');

    // Check if main image is first image, since it's the default and appears on the thumbnail
    expect(mainImage).toHaveLength(2);
    expect(secondImage).toHaveLength(1);

    fireEvent.click(secondImage[0]);

    // Check if main image is second image
    mainImage = screen.getAllByAltText('Image 1');
    secondImage = screen.getAllByAltText('Image 2');

    expect(mainImage).toHaveLength(1);
    expect(secondImage).toHaveLength(2);
  });

  test('shows thumbnails for all images', () => {
    render(<Gallery {...defaultProps} />);
    const thumbnails = screen.getAllByTestId('gallery-image');

    expect(thumbnails).toHaveLength(3);
  });

  test('highlights selected thumbnail', () => {
    render(<Gallery {...defaultProps} />);
    const thumbnails = screen.getAllByTestId('gallery-image');

    expect(thumbnails[0]).toHaveAttribute('data-selected', 'true');
    expect(thumbnails[1]).toHaveAttribute('data-selected', 'false');
    expect(thumbnails[2]).toHaveAttribute('data-selected', 'false');

    fireEvent.click(thumbnails[1]);
    expect(thumbnails[0]).toHaveAttribute('data-selected', 'false');
    expect(thumbnails[1]).toHaveAttribute('data-selected', 'true');
    expect(thumbnails[2]).toHaveAttribute('data-selected', 'false');

    fireEvent.click(thumbnails[2]);
    expect(thumbnails[0]).toHaveAttribute('data-selected', 'false');
    expect(thumbnails[1]).toHaveAttribute('data-selected', 'false');
    expect(thumbnails[2]).toHaveAttribute('data-selected', 'true');
  });

  test('applies correct styles to main image', () => {
    render(<Gallery {...defaultProps} />);
    const mainImage = screen.getAllByAltText('Image 1')[0];

    expect(mainImage).toHaveStyle(`
        border-radius: 10px;
        width: 100%;
        height: 400px;
        object-fit: cover;
      `);
  });

  test('applies correct styles to thumbnails', () => {
    render(<Gallery {...defaultProps} />);
    const thumbnails = screen.getAllByTestId('gallery-image');

    thumbnails.forEach((thumbnail) => {
      expect(thumbnail).toHaveStyle(`
          border-radius: 8px;
          height: 120px;
          min-width: 80px;
          object-fit: cover;
          object-position: bottom;
          cursor: pointer;
        `);
    });
  });

  test('does not display thumbnails if only one image is provided', () => {
    const singleImageProps: GalleryProps = {
      images: [{ src: 'singleImage.jpg', alt: 'Single Image' }],
    };

    render(<Gallery {...singleImageProps} />);
    const thumbnails = screen.queryByTestId('gallery-thumbnails');

    expect(thumbnails).not.toBeInTheDocument();
  });
});
