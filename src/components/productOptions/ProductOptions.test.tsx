import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductOptions from './ProductOptions';
import { ProductOptionsProps } from '../../utils/types';
import ProductOption from './ProductOption';

// Mock ProductOption to simplify testing ProductOptions
jest.mock('./ProductOption', () => (props: any) => (
  <div
    data-testid='product-option'
    data-selected={props.selected}
    data-color={props.color}
    onClick={() => props.setOptionSelected(props.index)}
  >
    {props.name}
  </div>
));

describe('ProductOptions Component', () => {
  const defaultProps: ProductOptionsProps = {
    optionName: 'Test Group',
    optionsObj: [
      { name: 'Option 1', outOfStock: false },
      { name: 'Option 2', outOfStock: true },
      { name: 'Option 3', outOfStock: false },
    ],
    space: 'md',
    orientation: 'horizontal',
    color: 'cyan',
  };

  test('renders without crashing', () => {
    render(<ProductOptions {...defaultProps} />);
    const optionOne = screen.getByText('Option 1');
    const optionTwo = screen.getByText('Option 2');
    const optionThree = screen.getByText('Option 3');

    expect(optionOne).toBeInTheDocument();
    expect(optionTwo).toBeInTheDocument();
    expect(optionThree).toBeInTheDocument();
  });

  test('applies correct space and orientation attributes', () => {
    render(
      <ProductOptions {...defaultProps} space='lg' orientation='vertical' />
    );
    const container = screen.getByTestId('product-options-container');

    expect(container).toHaveAttribute('data-space', 'lg');
    expect(container).toHaveAttribute('data-orientation', 'vertical');
  });

  test('sets correct option as selected when clicked', () => {
    render(<ProductOptions {...defaultProps} />);
    const options = screen.getAllByTestId('product-option');

    fireEvent.click(options[0]);
    expect(options[0]).toHaveAttribute('data-selected', 'true');
    expect(options[1]).toHaveAttribute('data-selected', 'false');
    expect(options[2]).toHaveAttribute('data-selected', 'false');

    fireEvent.click(options[2]);
    expect(options[0]).toHaveAttribute('data-selected', 'false');
    expect(options[1]).toHaveAttribute('data-selected', 'false');
    expect(options[2]).toHaveAttribute('data-selected', 'true');
  });

  test('passes correct color prop to child ProductOption', () => {
    render(<ProductOptions {...defaultProps} color='green' />);
    const options = screen.getAllByTestId('product-option');

    options.forEach((option) => {
      expect(option).toHaveAttribute('data-color', 'green');
    });
  });

  test('filters out invalid options', () => {
    const invalidProps: ProductOptionsProps = {
      ...defaultProps,
      optionsObj: [
        { name: 'Option 1', outOfStock: false },
        null,
        undefined,
        { name: 'Option 4', outOfStock: false },
      ],
    };
    render(<ProductOptions {...invalidProps} />);
    const options = screen.getAllByTestId('product-option');
    expect(options.length).toBe(2); // Only two valid options should be rendered

    const optionOne = screen.getByText('Option 1');
    const optionFour = screen.getByText('Option 4');

    expect(optionOne).toBeInTheDocument();
    expect(optionFour).toBeInTheDocument();
  });
});
