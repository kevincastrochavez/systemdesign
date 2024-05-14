import { render, screen } from '@testing-library/react';

import Chip from './Chip';
import { chipDefault, chipLong } from '../__mocks__/chipMocks';

describe('Chip', () => {
  it('renders the text passed to it', () => {
    render(<Chip text={chipDefault.text} />);

    const chip = screen.getByText(chipDefault.text);
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveTextContent('Interior');
  });

  it('renders the long text passed to it', () => {
    render(<Chip text={chipLong.text} />);

    const chip = screen.getByText(chipLong.text);
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveTextContent('Interior Design Long');
  });
});
