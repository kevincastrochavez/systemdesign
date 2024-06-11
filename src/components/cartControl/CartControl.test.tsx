import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CartControl from './CartControl';

describe('CartControl Component', () => {
  it('renders with default props', () => {
    render(<CartControl />);

    const number = screen.getByText('1');
    const plusButton = screen.getByTestId('plus');
    const minusButton = screen.getByTestId('minus');

    expect(number).toBeInTheDocument();
    expect(plusButton).toBeInTheDocument();
    expect(minusButton).toBeInTheDocument();
  });

  it('increments the count when plus icon is clicked', () => {
    render(<CartControl />);

    const plusButton = screen.getByTestId('plus');
    fireEvent.click(plusButton);
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('decrements the count when minus icon is clicked', () => {
    render(<CartControl />);

    const plusButton = screen.getByTestId('plus');
    const minusButton = screen.getByTestId('minus');

    // Increment first to be able to decrement
    fireEvent.click(plusButton);
    fireEvent.click(minusButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('does not decrement below minValue', () => {
    render(<CartControl minValue={1} />);

    const minusButton = screen.getByTestId('minus');
    fireEvent.click(minusButton);
    // Should remain at minValue
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('does not increment above maxValue', () => {
    render(<CartControl maxValue={2} />);

    const plusButton = screen.getByTestId('plus');

    // Increment twice to reach maxValue
    fireEvent.click(plusButton);
    expect(screen.getByText('2')).toBeInTheDocument(); // Should be maxValue
    fireEvent.click(plusButton);
    expect(screen.getByText('2')).toBeInTheDocument(); // Should remain at maxValue
  });

  it('disables the decrement button when at minValue', () => {
    render(<CartControl minValue={1} />);

    const minusButton = screen.getByTestId('minus');
    expect(minusButton).toHaveAttribute('data-disabled', 'true');
  });

  it('disables the increment button when at maxValue', () => {
    render(<CartControl maxValue={1} />);

    const plusButton = screen.getByTestId('plus');
    expect(plusButton).toHaveAttribute('data-disabled', 'true');
  });
});
