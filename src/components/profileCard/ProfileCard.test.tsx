import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import ProfileCard from './ProfileCard'; // Adjust the path as necessary

describe('ProfileCard Component', () => {
  const mockImageProps = {
    src: 'test-avatar.jpg',
    alt: 'Test Avatar',
  };

  const mockButtonProps = {
    text: 'Click me',
    onClick: jest.fn(),
  };

  const mockSocialBarProps = {
    actionIcons: [
      { icon: <svg>FB</svg>, onClick: jest.fn() },
      { icon: <svg>Twitter</svg>, onClick: jest.fn() },
    ],
  };

  it('renders correctly with all props provided', () => {
    render(
      <ProfileCard
        image={mockImageProps}
        title='Kevin Castro'
        subtitle='Web Developer'
        text='Your next Frontend Engineer'
        button={mockButtonProps}
        socialBar={mockSocialBarProps}
      />
    );

    expect(screen.getByAltText('Test Avatar')).toBeInTheDocument();
    expect(screen.getByText('Kevin Castro')).toBeInTheDocument();
    expect(screen.getByText('Web Developer')).toBeInTheDocument();
    expect(screen.getByText('Your next Frontend Engineer')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Click me' })
    ).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(3); // Including social icons
  });

  it('displays the avatar with the correct attributes', () => {
    render(
      <ProfileCard
        image={mockImageProps}
        title='Kevin Castro'
        subtitle='Web Developer'
        text='Your next Frontend Engineer'
        button={mockButtonProps}
        socialBar={mockSocialBarProps}
      />
    );

    const avatar = screen.getByAltText('Test Avatar');
    expect(avatar).toHaveAttribute('src', 'test-avatar.jpg');
  });

  it('renders the social bar with expected number of icons', () => {
    render(
      <ProfileCard
        image={mockImageProps}
        title='Kevin Castro'
        subtitle='Web Developer'
        text='Your next Frontend Engineer'
        button={mockButtonProps}
        socialBar={mockSocialBarProps}
      />
    );

    // Assuming each SVG is wrapped in a button or similar clickable element
    const socialIcons = screen.getAllByRole('button');
    expect(socialIcons.length).toBeGreaterThanOrEqual(2); // Should find at least two social icons
  });
});
