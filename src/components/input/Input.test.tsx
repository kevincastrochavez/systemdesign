import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { IconEye } from '@tabler/icons-react';

import Input from './Input';

describe('Input Component', () => {
  const defaultProps = {
    labelText: 'Test Label',
    placeholder: 'Enter text...',
    type: 'text',
    pattern: '.*',
    hint: 'Test hint',
    disabled: false,
  };

  test('renders without crashing', () => {
    render(<Input {...defaultProps} />);
    const input = screen.getByLabelText('Test Label');

    expect(input).toBeInTheDocument();
  });

  test('displays the correct label', () => {
    render(<Input {...defaultProps} />);
    const label = screen.getByLabelText('Test Label');

    expect(label).toHaveAttribute('placeholder', 'Enter text...');
  });

  test('displays the left icon when provided', () => {
    render(
      <Input {...defaultProps} leftIcon={<IconEye data-testid='left-icon' />} />
    );
    const leftIcon = screen.getByTestId('left-icon');

    expect(leftIcon).toBeInTheDocument();
  });

  test('displays the correct hint', () => {
    render(<Input {...defaultProps} />);
    const hint = screen.getByText('Test hint');

    expect(hint).toBeInTheDocument();
  });

  test('shows error message on invalid input after blur', () => {
    render(<Input {...defaultProps} pattern='^abc$' />);
    const input = screen.getByLabelText('Test Label');

    fireEvent.change(input, { target: { value: 'wrong' } });
    fireEvent.blur(input);

    expect(screen.getByText('This is an error message')).toBeInTheDocument();
  });

  test('does not show error message on valid input', () => {
    render(<Input {...defaultProps} pattern='^abc$' />);
    const input = screen.getByLabelText('Test Label');

    fireEvent.change(input, { target: { value: 'abc' } });
    fireEvent.blur(input);

    expect(
      screen.queryByText('This is an error message')
    ).not.toBeInTheDocument();
  });

  test('toggles password visibility', () => {
    render(<Input {...defaultProps} type='password' />);
    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveAttribute('type', 'password');

    const togglePasswordButton = screen.getByTestId('toggleEye');
    fireEvent.click(togglePasswordButton);
    expect(input).toHaveAttribute('type', 'text');

    fireEvent.click(togglePasswordButton);
    expect(input).toHaveAttribute('type', 'password');
  });

  test('applies disabled attribute correctly', () => {
    render(<Input {...defaultProps} disabled />);
    const input = screen.getByLabelText('Test Label');

    expect(input).toBeDisabled();
  });
});
