import type { Meta } from '@storybook/react';

import Review from './Review';
import { ReviewProps } from '../../utils/types';
import { reviewDefault } from '../__mocks__/reviewMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Review> = {
  title: 'Components/ReviewSectionGroup/Review',
  component: Review,
  argTypes: {
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

export const Basic = (args: ReviewProps) => <Review {...args} />;
Basic.args = {
  ...reviewDefault,
};
