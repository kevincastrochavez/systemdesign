import type { Meta } from '@storybook/react';

import TestimonialCard from './TestimonialCard';
import { TestimonialCardProps } from '../../utils/types';
import {
  testimonialCardComplete,
  testimonialCardWithoutImage,
  testimonialCardWithoutUsername,
  testimonialCardTooLongTitle,
} from '../__mocks__/testimonialCardMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof TestimonialCard> = {
  title: 'Components/TestimonialCard',
  component: TestimonialCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: TestimonialCardProps) => (
  <TestimonialCard {...args} />
);
Basic.args = {
  ...testimonialCardComplete,
};

export const NoImage = (args: TestimonialCardProps) => (
  <TestimonialCard {...args} />
);
NoImage.args = {
  ...testimonialCardWithoutImage,
};

export const NoUserName = (args: TestimonialCardProps) => (
  <TestimonialCard {...args} />
);
NoUserName.args = {
  ...testimonialCardWithoutUsername,
};

export const TooLongTitle = (args: TestimonialCardProps) => (
  <TestimonialCard {...args} />
);
TooLongTitle.args = {
  ...testimonialCardTooLongTitle,
};
