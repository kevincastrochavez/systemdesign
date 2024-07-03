import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FilterColors from './FilterColors';

// Mock FilterColor component
jest.mock(
  './FilterColor',
  () =>
    ({ color, setColorSelected, colorSelected }: any) => (
      <div
        data-testid={`filter-color-${color}`}
        onClick={() => setColorSelected(color)}
      >
        {color} - {colorSelected === color ? 'Selected' : 'Not Selected'}
      </div>
    )
);

describe('FilterColors Component', () => {
  const colors = ['red', 'blue', 'green'];

  test('renders without crashing', () => {
    render(<FilterColors colors={colors} />);

    colors.forEach((color) => {
      const colorElement = screen.getByTestId(`filter-color-${color}`);
      expect(colorElement).toBeInTheDocument();
    });
  });

  test('displays all colors passed as props', () => {
    render(<FilterColors colors={colors} />);
    colors.forEach((color) => {
      const colorElement = screen.getByText(`${color} - Not Selected`);
      expect(colorElement).toBeInTheDocument();
    });
  });

  test('selects a color when clicked', () => {
    render(<FilterColors colors={colors} />);
    const redColor = screen.getByTestId('filter-color-red');

    fireEvent.click(redColor);

    const selectedColor = screen.getByText('red - Selected');
    const notSelectedColor = screen.getByText('blue - Not Selected');
    const notSelectedColor2 = screen.getByText('green - Not Selected');

    expect(selectedColor).toBeInTheDocument();
    expect(notSelectedColor).toBeInTheDocument();
    expect(notSelectedColor2).toBeInTheDocument();
  });

  test('only one color can be selected at a time', () => {
    render(<FilterColors colors={colors} />);
    const redColor = screen.getByTestId('filter-color-red');

    fireEvent.click(redColor);

    // Check red color is selected and other colors are not selected
    let selectedColor = screen.getByText('red - Selected');
    let notSelectedColor = screen.getByText('blue - Not Selected');
    let notSelectedColor2 = screen.getByText('green - Not Selected');

    expect(selectedColor).toBeInTheDocument();
    expect(notSelectedColor).toBeInTheDocument();
    expect(notSelectedColor2).toBeInTheDocument();

    // Select another color
    const blueColor = screen.getByTestId('filter-color-blue');

    fireEvent.click(blueColor);

    // Check blue color is selected and other colors are not selected
    selectedColor = screen.getByTestId('filter-color-blue');
    notSelectedColor = screen.getByTestId('filter-color-green');
    notSelectedColor2 = screen.getByTestId('filter-color-red');

    expect(selectedColor).toBeInTheDocument();
    expect(notSelectedColor).toBeInTheDocument();
    expect(notSelectedColor2).toBeInTheDocument();
  });
});
