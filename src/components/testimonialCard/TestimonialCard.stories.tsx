import type { Meta } from '@storybook/react';

import TestimonialCard from './TestimonialCard';
import { TestimonialCardProps } from '../../utils/types';
import { testimonialCardComplete } from '../__mocks__/testimonialCardMocks';

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
