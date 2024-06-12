import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ColorSwatch from './ColorSwatch';
import { ColorSwatchProps } from '../../utils/types';
import { COLORS } from '../../utils/constants';
import { IconCheck, IconPointOff } from '@tabler/icons-react';

describe('ColorSwatch Component', () => {
  const defaultProps: ColorSwatchProps = {
    color: 'cyan',
    outOfStock: false,
    shape: 'rounded',
    setOptionSelected: jest.fn(),
    index: 0,
    selected: false,
  };

  test('renders without crashing', () => {
    render(<ColorSwatch {...defaultProps} />);

    const swatch = screen.getByTestId('color-swatch-container');
    expect(swatch).toBeInTheDocument();
  });

  test('displays correct color and shape', () => {
    const { rerender } = render(
      <ColorSwatch {...defaultProps} color='green' shape='squared' />
    );
    const swatchOne = screen.getByTestId(`color-swatch-green`);

    expect(swatchOne).toHaveAttribute('data-color', 'green');
    expect(swatchOne).toHaveAttribute('data-shape', 'squared');

    rerender(<ColorSwatch {...defaultProps} color='indigo' shape='rounded' />);
    const swatchTwo = screen.getByTestId(`color-swatch-indigo`);

    expect(swatchTwo).toHaveAttribute('data-color', 'indigo');
    expect(swatchTwo).toHaveAttribute('data-shape', 'rounded');
  });

  test('calls setOptionSelected with correct index when clicked', () => {
    render(<ColorSwatch {...defaultProps} />);
    const swatch = screen.getByTestId(`color-swatch-container`);

    fireEvent.click(swatch);
    expect(defaultProps.setOptionSelected).toHaveBeenCalledWith(0);
  });

  test('displays check icon when selected and not out of stock', () => {
    render(<ColorSwatch {...defaultProps} selected={true} />);
    const iconCheck = screen.getByTestId('icon-check');

    expect(iconCheck).toBeInTheDocument();
  });

  test('displays out of stock icon when selected and out of stock', () => {
    render(<ColorSwatch {...defaultProps} selected={true} outOfStock={true} />);
    const iconPointOff = screen.getByTestId('icon-point-off');

    expect(iconPointOff).toBeInTheDocument();
  });

  test('applies selected styles correctly', () => {
    render(<ColorSwatch {...defaultProps} selected={true} />);

    const swatch = screen.getByTestId(`color-swatch-${defaultProps.color}`);
    expect(swatch).toHaveAttribute('data-selected', 'true');
  });

  test('applies hover styles on mouse over', () => {
    render(<ColorSwatch {...defaultProps} />);
    const swatch = screen.getByTestId(`color-swatch-${defaultProps.color}`);

    fireEvent.mouseOver(swatch);
    expect(swatch).toHaveStyle(`border: 2.3px solid ${COLORS.indigo200}`);
  });
});
