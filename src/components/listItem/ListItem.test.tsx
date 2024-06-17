import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ListItem from './ListItem';
import { ListItemProps } from '../../utils/types';

// Mock Icon component to isolate tests for ListItem
jest.mock('../icon/Icon', () => (props: any) => (
  <div data-testid='mock-icon' {...props}></div>
));

describe('ListItem Component', () => {
  const defaultProps: ListItemProps = {
    iconObj: {
      color: 'cyan',
      size: 'md',
      shadow: true,
      shape: 'rounded',
      icon: <svg data-testid='svg-icon'></svg>,
    },
    text: 'Sample text',
  };

  test('renders without crashing', () => {
    render(<ListItem {...defaultProps} />);
    const listItemText = screen.getByText('Sample text');

    expect(listItemText).toBeInTheDocument();
  });
});
