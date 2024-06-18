import type { Meta } from '@storybook/react';

import ReviewSection from './ReviewSection';
import { ReviewSectionProps } from '../../utils/types';
import {
  reviewSectionDefault,
  reviewSectionNoReviews,
} from '../__mocks__/reviewSectionMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof ReviewSection> = {
  title: 'Components/ReviewSectionGroup/ReviewSection',
  component: ReviewSection,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: ReviewSectionProps) => <ReviewSection {...args} />;
Basic.args = {
  ...reviewSectionDefault,
};

export const NoReviews = (args: ReviewSectionProps) => (
  <ReviewSection {...args} />
);
NoReviews.args = {
  ...reviewSectionNoReviews,
};
