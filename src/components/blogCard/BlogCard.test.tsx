import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Needed to wrap around `Link`

import BlogCard from './BlogCard';
import {
  blogCardComplete,
  blogCardNoImage,
  blogCardNoChips,
} from '../__mocks__/blogCardMocks';

describe('BlogCard', () => {
  it('renders correctly with all props', () => {
    render(
      <MemoryRouter>
        <BlogCard {...blogCardComplete} />
      </MemoryRouter>
    );

    // Check if the image renders correctly
    const img = screen.getByRole('img', { name: 'Living Room Inspiration' });
    expect(img).toBeInTheDocument();

    // Check if chips are rendered
    const chipOne = screen.getByText('Interior');
    const chipTwo = screen.getByText('Living Room');

    expect(chipOne).toBeInTheDocument();
    expect(chipTwo).toBeInTheDocument();

    // Check title and description
    const title = screen.getByText('Top 5 Living Room Inspirations.');
    const description = screen.getByText(
      'Curated vibrants colors for your living, make it pop & calm in the same time.'
    );
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();

    // Check CTA button
    const ctaBtn = screen.getByRole('link', { name: 'Read More' });
    expect(ctaBtn).toBeInTheDocument();
  });

  it('does not render image when image prop is not provided', () => {
    render(
      <MemoryRouter>
        <BlogCard {...blogCardNoImage} />
      </MemoryRouter>
    );
    const img = screen.queryByRole('img', { name: 'Living Room Inspiration' });
    expect(img).not.toBeInTheDocument();
  });

  it('does not render chips when chips array is empty', () => {
    render(
      <MemoryRouter>
        <BlogCard {...blogCardNoChips} />
      </MemoryRouter>
    );

    const chipOne = screen.queryByText('Interior');
    const chipTwo = screen.queryByText('Living Room');

    expect(chipOne).not.toBeInTheDocument();
    expect(chipTwo).not.toBeInTheDocument();
  });
});
