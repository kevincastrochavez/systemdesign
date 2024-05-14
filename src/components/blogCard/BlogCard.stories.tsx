import type { Meta } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';

import BlogCard from './BlogCard';
import { BlogCardProps } from '../../utils/types';
import {
  blogCardComplete,
  blogCardNoImage,
  blogCardLongTitle,
  blogCardManyChips,
  blogCardNoChips,
  blogCardLongDescription,
} from '../__mocks__/blogCardMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof BlogCard> = {
  title: 'Components/BlogCard',
  component: BlogCard,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: BlogCardProps) => <BlogCard {...args} />;
Basic.args = {
  ...blogCardComplete,
};

export const NoImage = (args: BlogCardProps) => <BlogCard {...args} />;
NoImage.args = {
  ...blogCardNoImage,
};

export const LongTitle = (args: BlogCardProps) => <BlogCard {...args} />;
LongTitle.args = {
  ...blogCardLongTitle,
};

export const LongDescription = (args: BlogCardProps) => <BlogCard {...args} />;
LongDescription.args = {
  ...blogCardLongDescription,
};

export const ManyChips = (args: BlogCardProps) => <BlogCard {...args} />;
ManyChips.args = {
  ...blogCardManyChips,
};

export const NoChips = (args: BlogCardProps) => <BlogCard {...args} />;
NoChips.args = {
  ...blogCardNoChips,
};
