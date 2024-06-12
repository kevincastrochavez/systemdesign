import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductOption from './ProductOption';
import { COLORS } from '../../utils/constants';

describe('ProductOption Component', () => {
  const defaultProps = {
    name: 'Test Option',
    outOfStock: false,
    setOptionSelected: jest.fn(),
    index: 0,
    selected: false,
    color: 'cyan',
  };

  test('renders without crashing', () => {
    render(<ProductOption {...defaultProps} />);
    const option = screen.getByText('Test Option');

    expect(option).toBeInTheDocument();
  });

  test('displays correct text', () => {
    render(<ProductOption {...defaultProps} />);
    const option = screen.getByText('Test Option');

    expect(option).toHaveTextContent('Test Option');
  });

  test('applies selected styles when selected', () => {
    render(<ProductOption {...defaultProps} selected={true} />);
    const option = screen.getByText('Test Option');

    expect(option).toHaveAttribute('data-selected', 'true');
  });

  test('applies out of stock styles when out of stock', () => {
    render(<ProductOption {...defaultProps} outOfStock={true} />);
    const option = screen.getByText('Test Option');

    expect(option).toHaveAttribute('data-disabled', 'true');
  });

  test('calls setOptionSelected when clicked', () => {
    render(<ProductOption {...defaultProps} />);
    const option = screen.getByText('Test Option');

    fireEvent.click(option);
    expect(defaultProps.setOptionSelected).toHaveBeenCalledWith(0);
  });

  test('applies correct color when selected', () => {
    const { rerender } = render(
      <ProductOption {...defaultProps} selected={true} color='cyan' />
    );
    const optionCyan = screen.getByText('Test Option');
    expect(optionCyan).toHaveAttribute('data-color', 'cyan');

    rerender(
      <ProductOption {...defaultProps} selected={true} color='indigo' />
    );
    const optionIndigo = screen.getByText('Test Option');
    expect(optionIndigo).toHaveAttribute('data-color', 'indigo');

    rerender(<ProductOption {...defaultProps} selected={true} color='green' />);
    const optionGreen = screen.getByText('Test Option');
    expect(optionGreen).toHaveAttribute('data-color', 'green');

    rerender(
      <ProductOption {...defaultProps} selected={true} color='orange' />
    );
    const optionOrange = screen.getByText('Test Option');
    expect(optionOrange).toHaveAttribute('data-color', 'orange');
  });

  test('calls setOptionSelected even when out of stock and clicked', () => {
    render(<ProductOption {...defaultProps} outOfStock={true} />);
    const option = screen.getByText('Test Option');

    fireEvent.click(option);
    expect(defaultProps.setOptionSelected).toHaveBeenCalled();
  });

  test('applies hover styles on mouse over', () => {
    render(<ProductOption {...defaultProps} />);
    const option = screen.getByText('Test Option');

    fireEvent.mouseOver(option);
    expect(option).toHaveStyle(`background-color: ${COLORS.neutral50}`);
  });
});
