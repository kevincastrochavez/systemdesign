import type { Meta } from '@storybook/react';

import Avatar from './Avatar';
import { AvatarProps } from '../../utils/types';
import picture from '../../assets/kevin.jpg';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      options: [picture, null],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    radius: {
      options: ['sm', 'md', 'lg', 'full'],
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: AvatarProps) => <Avatar {...args} />;
Basic.args = {
  src: picture,
};

export const NoImage = (args: AvatarProps) => <Avatar {...args} />;
NoImage.args = {
  size: 'md',
  radius: 'md',
};
