import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, useSearchParams } from 'react-router-dom';

import FilterColor from './FilterColor';
import { FilterColorProps } from '../../utils/types';
import { COLORS } from '../../utils/constants';

// Mocking the useSearchParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: jest.fn(),
}));

const mockSetSearchParams = jest.fn();
const mockSetColorSelected = jest.fn();

const defaultProps: FilterColorProps = {
  color: 'indigo',
  setColorSelected: mockSetColorSelected,
  colorSelected: '',
};

describe('FilterColor Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useSearchParams as jest.Mock).mockReturnValue([
      new URLSearchParams(),
      mockSetSearchParams,
    ]);
  });

  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <FilterColor {...defaultProps} />
      </MemoryRouter>
    );
    const colorContainer = screen.getByTestId(defaultProps.color);

    expect(colorContainer).toBeInTheDocument();
  });

  test('applies the correct color class based on the color prop', () => {
    render(
      <MemoryRouter>
        <FilterColor {...defaultProps} />
      </MemoryRouter>
    );
    const colorDiv = screen.getByTestId(`${defaultProps.color}-circle`);

    expect(colorDiv).toHaveAttribute('data-color', 'indigo');
    expect(colorDiv).toHaveStyle(`background-color: ${COLORS.indigo700}`);
  });

  test('selects the color when clicked', () => {
    render(
      <MemoryRouter>
        <FilterColor {...defaultProps} />
      </MemoryRouter>
    );
    const colorContainer = screen.getByTestId(defaultProps.color);
    fireEvent.click(colorContainer);

    expect(mockSetColorSelected).toHaveBeenCalledWith('indigo');
    expect(mockSetSearchParams).toHaveBeenCalledWith(
      new URLSearchParams('color=indigo')
    );
  });

  test('unselects the color when clicked again', () => {
    render(
      <MemoryRouter>
        <FilterColor {...defaultProps} colorSelected='indigo' />
      </MemoryRouter>
    );
    const colorContainer = screen.getByTestId(defaultProps.color);
    fireEvent.click(colorContainer);

    expect(mockSetColorSelected).toHaveBeenCalledWith('');
    expect(mockSetSearchParams).toHaveBeenCalledWith(new URLSearchParams());
  });

  test('applies the correct selected style when the color is selected', () => {
    render(
      <MemoryRouter>
        <FilterColor {...defaultProps} colorSelected='indigo' />
      </MemoryRouter>
    );
    const colorDiv = screen.getByTestId(`${defaultProps.color}-circle`);

    expect(colorDiv).toHaveAttribute('data-selected', 'true');
    expect(colorDiv).toHaveStyle(`outline: 2px solid ${COLORS.indigo200}`);
  });

  test('sets color from URL params on mount', () => {
    (useSearchParams as jest.Mock).mockReturnValue([
      new URLSearchParams('color=indigo'),
      mockSetSearchParams,
    ]);
    render(
      <MemoryRouter>
        <FilterColor {...defaultProps} />
      </MemoryRouter>
    );
    expect(mockSetColorSelected).toHaveBeenCalledWith('indigo');
  });
});
