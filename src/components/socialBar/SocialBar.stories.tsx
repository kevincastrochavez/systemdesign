import type { Meta } from '@storybook/react';

import SocialBar from './SocialBar';
import { SocialBarProps } from '../../utils/types';
import { socialBarDefault } from '../__mocks__/socialBarMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof SocialBar> = {
  title: 'Components/SocialBar',
  component: SocialBar,
  argTypes: {
    color: {
      options: ['green', 'indigo', 'orange', 'cyan'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    width: {
      options: ['fit-content', 'full'],
      control: { type: 'select' },
    },
    separation: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: SocialBarProps) => <SocialBar {...args} />;
Basic.args = {
  ...socialBarDefault,
};
