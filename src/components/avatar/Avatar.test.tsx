import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Avatar from './Avatar';
import {
  avatarWithImage,
  avatarSizeLargeRadiusFull,
} from '../__mocks__/avatarMocks';

describe('Avatar', () => {
  it('renders with default properties', () => {
    render(<Avatar />);
    const avatarIcon = screen.getByTestId('avatar-icon');
    const avatarWrapper = screen.getByTestId('avatar');

    expect(avatarIcon).toBeInTheDocument();
    expect(avatarWrapper).toHaveAttribute('data-size', 'md');
    expect(avatarWrapper).toHaveAttribute('data-radius', 'md');
  });

  it('renders an image when a source is provided', () => {
    render(<Avatar {...avatarWithImage} />);

    const avatarIcon = screen.getByTestId('avatar-image');
    expect(avatarIcon).toHaveAttribute('src', 'kevin.jpg');
    expect(avatarIcon).toHaveAttribute('alt', 'Kevin');
  });

  it('applies correct styles for different sizes and radii', () => {
    render(<Avatar {...avatarSizeLargeRadiusFull} />);

    const avatarWrapper = screen.getByTestId('avatar');
    expect(avatarWrapper).toHaveAttribute('data-size', 'lg');
    expect(avatarWrapper).toHaveAttribute('data-radius', 'full');
    expect(avatarWrapper).toHaveStyle({ borderRadius: '50%' });
  });
});
