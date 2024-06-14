import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import EmptyState from './EmptyState';
import { EmptyStateProps } from '../../utils/types';

// Mock the Icon component to focus on EmptyState
jest.mock('../icon/Icon', () => (props: any) => (
  <div data-testid='mock-icon' {...props}></div>
));

describe('EmptyState Component', () => {
  const defaultProps: EmptyStateProps = {
    title: 'No Data Available',
    description:
      'There is currently no data to display. Please check back later.',
    iconObj: {
      icon: <svg data-testid='mock-svg-icon'></svg>,
      color: 'cyan',
      size: 'lg',
      shadow: false,
      shape: 'rounded',
    },
  };

  test('renders without crashing', () => {
    render(<EmptyState {...defaultProps} />);
    const icon = screen.getByTestId('mock-icon');
    const title = screen.getByText('No Data Available');
    const description = screen.getByText(
      'There is currently no data to display. Please check back later.'
    );

    expect(icon).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test('renders without icon if iconObj is not provided', () => {
    const propsWithoutIcon: EmptyStateProps = {
      title: 'No Data Available',
      description:
        'There is currently no data to display. Please check back later.',
    };
    render(<EmptyState {...propsWithoutIcon} />);
    const icon = screen.queryByTestId('mock-icon');
    const title = screen.getByText('No Data Available');

    expect(icon).not.toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
