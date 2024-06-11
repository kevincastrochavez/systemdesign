import type { Meta } from '@storybook/react';

import Rating from './Rating';
import { RatingProps } from '../../utils/types';
import { ratingDefault } from '../__mocks__/ratingMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    rating: {
      control: { type: 'range', min: 0, max: 5, step: 0.5 },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: RatingProps) => <Rating {...args} />;
Basic.args = {
  ...ratingDefault,
};
