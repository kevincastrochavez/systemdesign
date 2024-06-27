import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, useSearchParams } from 'react-router-dom';

import FilterCheckbox from './FilterCheckbox';

// Mocking the useSearchParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: jest.fn(),
}));

const mockSetSearchParams = jest.fn();

const defaultProps = {
  labelText: 'Sample Filter',
  filterQuery: 'sample',
  categoryToFilter: 'category',
};

describe('FilterCheckbox Component', () => {
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
        <FilterCheckbox {...defaultProps} />
      </MemoryRouter>
    );
    const label = screen.getByText('Sample Filter');

    expect(label).toBeInTheDocument();
  });

  test('checkbox should be unchecked by default', () => {
    render(
      <MemoryRouter>
        <FilterCheckbox {...defaultProps} />
      </MemoryRouter>
    );
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();
  });

  test('checkbox should be checked if filterQuery is in search params', () => {
    (useSearchParams as jest.Mock).mockReturnValue([
      new URLSearchParams(
        `${defaultProps.categoryToFilter}=${defaultProps.filterQuery}`
      ),
      mockSetSearchParams,
    ]);
    render(
      <MemoryRouter>
        <FilterCheckbox {...defaultProps} />
      </MemoryRouter>
    );

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeChecked();
  });

  test('should add filterQuery to search params when checkbox is checked', () => {
    render(
      <MemoryRouter>
        <FilterCheckbox {...defaultProps} />
      </MemoryRouter>
    );
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockSetSearchParams).toHaveBeenCalledWith(
      expect.any(URLSearchParams)
    );
    expect(checkbox).toBeChecked();
  });

  test('should remove filterQuery from search params when checkbox is unchecked', () => {
    (useSearchParams as jest.Mock).mockReturnValue([
      new URLSearchParams(
        `${defaultProps.categoryToFilter}=${defaultProps.filterQuery}`
      ),
      mockSetSearchParams,
    ]);
    render(
      <MemoryRouter>
        <FilterCheckbox {...defaultProps} />
      </MemoryRouter>
    );
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockSetSearchParams).toHaveBeenCalledWith(
      expect.any(URLSearchParams)
    );
    expect(checkbox).not.toBeChecked();
  });
});
