/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Accordion from './Accordion';

describe('Accordion Component', () => {
  const defaultProps = {
    title: 'Accordion Title',
    content: ['Item 1', 'Item 2', 'Item 3'],
  };

  test('renders without crashing', () => {
    render(<Accordion {...defaultProps} />);
    const title = screen.getByText('Accordion Title');

    expect(title).toBeInTheDocument();
  });

  test('displays content when expanded', async () => {
    render(<Accordion {...defaultProps} />);
    const title = screen.getByText('Accordion Title');

    // Click to expand
    fireEvent.click(title);

    const contentOne = screen.getByText(/Item 1/);
    const contentTwo = screen.getByText('Item 2');
    const contentThree = screen.getByText('Item 3');

    await waitFor(() => {
      expect(contentOne).toBeInTheDocument();
      expect(contentTwo).toBeInTheDocument();
      expect(contentThree).toBeInTheDocument();
    });
  });

  test('hides content when collapsed', async () => {
    render(<Accordion {...defaultProps} />);
    const title = screen.getByText('Accordion Title');

    // Click to expand and then collapse
    fireEvent.click(title);
    await waitFor(() => {
      const contentOne = screen.getByText(/Item 1/);
      expect(contentOne).toBeInTheDocument();
    });

    fireEvent.click(title);
    await waitFor(() => {
      const contentOne = screen.queryByText(/Item 1/);
      expect(contentOne).not.toBeVisible();
    });
  });

  test('toggles between plus and minus icons on click', async () => {
    render(<Accordion {...defaultProps} />);
    const title = screen.getByText('Accordion Title');
    const plusIcon = screen.getByTestId('plus-icon');

    // Initially plus icon should be visible
    expect(plusIcon).toBeInTheDocument();

    // Click to expand and check for minus icon
    fireEvent.click(title);
    await waitFor(() => {
      const minusIcon = screen.getByTestId('minus-icon');
      expect(minusIcon).toBeInTheDocument();
    });

    // Click to collapse and check for plus icon again
    fireEvent.click(title);
    await waitFor(() => {
      const plusIcon = screen.getByTestId('plus-icon');
      expect(plusIcon).toBeInTheDocument();
    });
  });
});
