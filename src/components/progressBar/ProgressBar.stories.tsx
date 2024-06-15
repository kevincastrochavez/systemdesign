import type { Meta } from '@storybook/react';

import ProgressBar from './ProgressBar';
import { ProgressBarProps } from '../../utils/types';
import { progressBarDefault } from '../__mocks__/progressBarMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    qualityLevel: {
      options: ['excellent', 'good', 'average', 'belowAverage', 'poor'],
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: ProgressBarProps) => <ProgressBar {...args} />;
Basic.args = {
  ...progressBarDefault,
};
