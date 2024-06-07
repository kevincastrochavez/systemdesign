import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import ActionIcon from './ActionIcon'; // Adjust path as necessary

describe('ActionIcon Component', () => {
  const MockIcon = () => <svg>Test Icon</svg>;

  it('renders correctly', () => {
    render(<ActionIcon icon={<MockIcon />} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toContainHTML('<svg>Test Icon</svg>');
  });

  it('applies styles based on variant and color', () => {
    const { rerender } = render(
      <ActionIcon icon={<MockIcon />} variant='default' color='indigo' />
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('data-variant', 'default');
    expect(button).toHaveAttribute('data-color', 'indigo');

    rerender(
      <ActionIcon icon={<MockIcon />} variant='outline' color='green' />
    );
    expect(button).toHaveAttribute('data-variant', 'outline');
    expect(button).toHaveAttribute('data-color', 'green');
  });

  it('changes size and radius correctly', () => {
    render(<ActionIcon icon={<MockIcon />} size='lg' radius='full' />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('data-size', 'lg');
    expect(button).toHaveAttribute('data-radius', 'full');
  });

  it('is disabled when disabled prop is true', () => {
    render(<ActionIcon icon={<MockIcon />} disabled />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('handles onClick events', () => {
    const handleClick = jest.fn();
    render(<ActionIcon icon={<MockIcon />} onClick={handleClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
