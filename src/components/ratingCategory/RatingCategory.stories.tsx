import type { Meta } from '@storybook/react';

import RatingCategory from './RatingCategory';
import { RatingCategoryProps } from '../../utils/types';
import { ratingCategoryDefault } from '../__mocks__/ratingCategoryMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof RatingCategory> = {
  title: 'Components/RatingCategory',
  component: RatingCategory,
  argTypes: {
    name: {
      options: ['Excellent', 'Good', 'Average', 'Below Average', 'Poor'],
      control: { type: 'select' },
    },
    progressBar: {
      control: { type: 'object' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: RatingCategoryProps) => (
  <RatingCategory {...args} />
);
Basic.args = {
  ...ratingCategoryDefault,
};
