import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ColorSwatches from './ColorSwatches';
import { ColorSwatchesProps } from '../../utils/types';

// Mock ColorSwatch to simplify testing ColorSwatches
jest.mock('./ColorSwatch', () => (props: any) => (
  <div
    data-testid='color-swatch'
    data-selected={props.selected}
    data-color={props.color}
    data-shape={props.shape}
    onClick={() => props.setOptionSelected(props.index)}
  >
    {props.color}
  </div>
));

describe('ColorSwatches Component', () => {
  const defaultProps: ColorSwatchesProps = {
    colorsObj: [
      { color: 'cyan', outOfStock: false },
      { color: 'indigo', outOfStock: true },
      { color: 'green', outOfStock: false },
    ],
    space: 'md',
    shape: 'rounded',
    orientation: 'horizontal',
  };

  test('renders without crashing', () => {
    render(<ColorSwatches {...defaultProps} />);
    const container = screen.getByTestId('color-swatches-container');

    expect(container).toBeInTheDocument();
  });

  test('applies correct space and orientation attributes', () => {
    render(
      <ColorSwatches {...defaultProps} space='lg' orientation='vertical' />
    );
    const container = screen.getByTestId('color-swatches-container');

    expect(container).toHaveAttribute('data-space', 'lg');
    expect(container).toHaveAttribute('data-orientation', 'vertical');
  });

  test('sets correct option as selected when clicked', () => {
    render(<ColorSwatches {...defaultProps} />);
    const swatches = screen.getAllByTestId('color-swatch');

    fireEvent.click(swatches[0]);
    expect(swatches[0]).toHaveAttribute('data-selected', 'true');
    expect(swatches[1]).toHaveAttribute('data-selected', 'false');
    expect(swatches[2]).toHaveAttribute('data-selected', 'false');

    fireEvent.click(swatches[2]);
    expect(swatches[0]).toHaveAttribute('data-selected', 'false');
    expect(swatches[1]).toHaveAttribute('data-selected', 'false');
    expect(swatches[2]).toHaveAttribute('data-selected', 'true');
  });

  test('passes correct shape prop to child ColorSwatch', () => {
    render(<ColorSwatches {...defaultProps} shape='squared' />);
    const swatches = screen.getAllByTestId('color-swatch');

    swatches.forEach((swatch) => {
      expect(swatch).toHaveAttribute('data-shape', 'squared');
    });
  });

  test('filters out invalid options', () => {
    const invalidProps: ColorSwatchesProps = {
      ...defaultProps,
      colorsObj: [
        { color: 'cyan', outOfStock: false },
        null,
        undefined,
        { color: 'green', outOfStock: false },
      ],
    };
    render(<ColorSwatches {...invalidProps} />);

    const swatches = screen.getAllByTestId('color-swatch');
    expect(swatches.length).toBe(2); // Only two valid swatches should be rendered

    const swatchOne = swatches[0];
    const swatchTwo = swatches[1];

    expect(swatchOne).toBeInTheDocument();
    expect(swatchOne).toHaveAttribute('data-color', 'cyan');
    expect(swatchTwo).toBeInTheDocument();
    expect(swatchTwo).toHaveAttribute('data-color', 'green');
  });
});
