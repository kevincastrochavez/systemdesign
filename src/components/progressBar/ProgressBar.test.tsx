import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProgressBar from './ProgressBar'; // Adjust the import path according to your file structure
import { COLORS } from '../../utils/constants';
import { ProgressBarProps } from '../../utils/types';

describe('ProgressBar Component', () => {
  const defaultProps: ProgressBarProps = {
    value: 50,
    qualityLevel: 'good',
  };

  test('renders without crashing', () => {
    render(<ProgressBar {...defaultProps} />);
    const progressBar = screen.getByTestId('progress-bar-container');

    expect(progressBar).toBeInTheDocument();
  });

  test('displays correct width based on value', () => {
    render(<ProgressBar value={50} qualityLevel='good' />);

    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveStyle('width: 50%');
  });

  test('applies correct color based on quality', () => {
    const { rerender } = render(<ProgressBar value={50} qualityLevel='good' />);
    let progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveStyle(`background: ${COLORS.green500}`);

    // Check if the color changes when the quality changes
    rerender(<ProgressBar value={50} qualityLevel='average' />);
    progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveStyle(`background: ${COLORS.yellow300}`);

    rerender(<ProgressBar value={50} qualityLevel='belowAverage' />);
    progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveStyle(`background: ${COLORS.yellow500}`);

    rerender(<ProgressBar value={50} qualityLevel='poor' />);
    progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveStyle(`background: ${COLORS.red600}`);
  });

  test('uses default color when quality is not provided', () => {
    render(<ProgressBar value={50} />);
    const progressBar = screen.getByTestId('progress-bar');

    expect(progressBar).toHaveStyle(`background: ${COLORS.green600}`);
  });
});
