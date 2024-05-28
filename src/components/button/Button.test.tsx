import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './Button'; // Adjust the import path according to your project structure

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button text='Read More' />);

    const button = screen.getByRole('button', { name: 'Read More' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Read More');
    expect(button).not.toBeDisabled();
    expect(button).toHaveAttribute('data-variant', 'default');
    expect(button).toHaveAttribute('data-size', 'sm');
    expect(button).toHaveAttribute('data-radius', 'sm');
    expect(button).toHaveAttribute('data-color', 'indigo');
  });

  // Test variant changes
  it('applies the filled variant correctly', () => {
    render(<Button text='Click me' variant='filled' />);
    const button = screen.getByText('Click me');
    expect(button).toHaveAttribute('data-variant', 'filled');
  });

  // Test color changes
  it('applies color correctly', () => {
    render(<Button text='Click me' color='green' />);
    const button = screen.getByText('Click me');
    expect(button).toHaveAttribute('data-color', 'green');
  });

  // Test size changes
  it('applies size correctly', () => {
    render(<Button text='Click me' size='lg' />);
    const button = screen.getByText('Click me');
    expect(button).toHaveAttribute('data-size', 'lg');
  });

  // Test radius changes
  it('applies radius correctly', () => {
    render(<Button text='Click me' radius='full' />);
    const button = screen.getByText('Click me');
    expect(button).toHaveAttribute('data-radius', 'full');
  });

  // Test disabled state
  it('is disabled when disabled prop is true', () => {
    render(<Button text='Disabled' disabled />);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });

  // Test click functionality
  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button text='Click me' onclick={handleClick} />);
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test icon and position
  it('renders an icon and aligns it based on iconPosition', () => {
    const Icon = () => <span>Icon</span>;
    render(<Button text='With Icon' icon={<Icon />} iconPosition='left' />);
    const button = screen.getByText('With Icon');
    expect(button).toHaveTextContent('Icon');
    expect(button).toHaveAttribute('data-icon-position', 'left');
  });
});
