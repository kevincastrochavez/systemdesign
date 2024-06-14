import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Icon from './Icon';
import { IconProps } from '../../utils/types';
import { COLORS } from '../../utils/constants';

const MockSvgIcon = () => <svg data-testid='mock-svg-icon'></svg>;

describe('Icon Component', () => {
  const defaultProps: IconProps = {
    icon: <MockSvgIcon />,
    color: 'cyan',
    size: 'sm',
    shadow: true,
    shape: 'rounded',
  };

  test('renders without crashing', () => {
    render(<Icon {...defaultProps} />);
    const container = screen.getByTestId('icon-container');
    const icon = screen.getByTestId('mock-svg-icon');

    expect(container).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  test('applies default color class', () => {
    render(<Icon {...defaultProps} />);
    const container = screen.getByTestId('icon-container');
    const icon = screen.getByTestId('mock-svg-icon');

    expect(container).toHaveAttribute('data-color', 'cyan');
    expect(icon).toHaveStyle(`color: ${COLORS.cyan700}`);
  });

  test('applies correct color class based on props', () => {
    const { rerender } = render(<Icon {...defaultProps} color='indigo' />);
    let container = screen.getByTestId('icon-container');
    let icon = screen.getByTestId('mock-svg-icon');

    // Indigo is the default
    expect(container).toHaveAttribute('data-color', 'indigo');
    expect(icon).toHaveStyle(`color: ${COLORS.indigo700}`);

    // Change color to green
    rerender(<Icon {...defaultProps} color='green' />);
    container = screen.getByTestId('icon-container');
    icon = screen.getByTestId('mock-svg-icon');
    expect(container).toHaveAttribute('data-color', 'green');
    expect(icon).toHaveStyle(`color: ${COLORS.green700}`);

    // Change color to orange
    rerender(<Icon {...defaultProps} color='orange' />);
    container = screen.getByTestId('icon-container');
    icon = screen.getByTestId('mock-svg-icon');
    expect(container).toHaveAttribute('data-color', 'orange');
    expect(icon).toHaveStyle(`color: ${COLORS.orange700}`);
  });

  test('applies correct size class based on props', () => {
    const { rerender } = render(<Icon {...defaultProps} size='md' />);
    let container = screen.getByTestId('icon-container');
    let icon = screen.getByTestId('mock-svg-icon');
    expect(container).toHaveAttribute('data-size', 'md');
    expect(container).toHaveStyle('padding: 12px');
    expect(icon).toHaveStyle('width: 30px');
    expect(icon).toHaveStyle('height: 30px');

    rerender(<Icon {...defaultProps} size='lg' />);
    container = screen.getByTestId('icon-container');
    icon = screen.getByTestId('mock-svg-icon');
    expect(container).toHaveAttribute('data-size', 'lg');
    expect(container).toHaveStyle('padding: 16px');
    expect(icon).toHaveStyle('width: 40px');
    expect(icon).toHaveStyle('height: 40px');
  });

  test('applies correct shadow class based on props', () => {
    const { rerender } = render(<Icon {...defaultProps} shadow={false} />);
    let container = screen.getByTestId('icon-container');
    expect(container).toHaveAttribute('data-shadow', 'false');
    expect(container).toHaveStyle('box-shadow: none');

    rerender(<Icon {...defaultProps} shadow={true} />);
    container = screen.getByTestId('icon-container');
    expect(container).toHaveAttribute('data-shadow', 'true');
    expect(container).toHaveStyle(`
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      `);
  });

  test('applies correct shape class based on props', () => {
    const { rerender } = render(<Icon {...defaultProps} shape='squared' />);
    let container = screen.getByTestId('icon-container');
    expect(container).toHaveAttribute('data-shape', 'squared');
    expect(container).toHaveStyle('border-radius: 8px');

    rerender(<Icon {...defaultProps} shape='rounded' />);
    container = screen.getByTestId('icon-container');
    expect(container).toHaveAttribute('data-shape', 'rounded');
    expect(container).toHaveStyle('border-radius: 100px');
  });
});
