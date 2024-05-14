import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Needed to wrap around `Link`

import MoreButton from './MoreButton';
import {
  moreButtonDefault,
  moreButtonDisabled,
} from '../__mocks__/moreButtonMocks';

describe('MoreButton', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <MoreButton {...moreButtonDefault} />
      </MemoryRouter>
    );

    const btnText = screen.getByText(moreButtonDefault.text);
    const btnLink = screen.getByRole('link');

    expect(btnText).toBeInTheDocument();
    expect(btnText).toHaveTextContent('Read More');
    expect(btnLink).toHaveAttribute('href', '/someLink');
    expect(btnLink).not.toHaveStyle(`pointer-events: none`);
    expect(btnLink).toContainHTML('<svg'); // Checks if SVG is part of the output
  });

  it('applies disabled styles when disabled', () => {
    render(
      <MemoryRouter>
        <MoreButton {...moreButtonDisabled} />
      </MemoryRouter>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveStyle(`pointer-events: none`);
  });
});
