import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SocialBar from './SocialBar'; // Adjust path as necessary

describe('SocialBar Component', () => {
  // Mock data for icons
  const mockIcons = [
    { icon: <svg>Icon1</svg>, onClick: jest.fn() },
    { icon: <svg>Icon2</svg>, onClick: jest.fn() },
    { icon: <svg>Icon3</svg>, onClick: jest.fn() },
  ];

  it('renders correctly with multiple icons', () => {
    render(<SocialBar actionIcons={mockIcons} />);

    const icons = screen.getAllByRole('button');
    expect(icons.length).toBe(3); // Verify all icons are rendered
  });

  it('applies correct width and separation', () => {
    render(<SocialBar actionIcons={mockIcons} width='full' separation='lg' />);
    const socialBar = screen.queryByTestId('social-bar');

    expect(socialBar).toHaveAttribute('data-width', 'full');
    expect(socialBar).toHaveAttribute('data-separation', 'lg');
  });

  it('renders icons with specified size and color', () => {
    render(<SocialBar actionIcons={mockIcons} color='green' size='lg' />);
    const icons = screen.getAllByRole('button');

    icons.forEach((icon) => {
      expect(icon).toHaveAttribute('data-size', 'lg'); // Checking if the container has the correct size
      expect(icon).toHaveAttribute('data-color', 'green'); // Assuming ActionIcon passes down data-color attribute correctly
    });
  });
});
