import { render, screen } from '@testing-library/react';

import Chip from './Chip';
import { chipDefault, chipLong, chipCyan } from '../__mocks__/chipMocks';

describe('Chip', () => {
  it('renders the text passed to it', () => {
    render(<Chip text={chipDefault.text} />);

    const chip = screen.getByText(chipDefault.text);
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveTextContent('Interior');
  });

  it('applies correct styles for different colors', () => {
    render(<Chip {...chipCyan} />);

    const chip = screen.getByText(chipCyan.text);
    expect(chip).toHaveStyle({ color: '#0e7490' });
    expect(chip).toHaveStyle({ borderColor: '#a5f3fc' });
    expect(chip).toHaveStyle({ backgroundColor: '#ecfeff' });
  });

  it('renders the long text passed to it', () => {
    render(<Chip text={chipLong.text} />);

    const chip = screen.getByText(chipLong.text);
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveTextContent('Interior Design Long');
  });
});
