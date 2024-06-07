import type { Meta } from '@storybook/react';

import ActionIcon from './ActionIcon';
import { ActionIconProps } from '../../utils/types';
import { actionIconDefault } from '../__mocks__/actionIconMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof ActionIcon> = {
  title: 'Components/ActionIcon',
  component: ActionIcon,
  argTypes: {
    variant: {
      options: ['default', 'filled', 'light', 'outline'],
      control: { type: 'select' },
    },
    color: {
      options: ['green', 'indigo', 'orange', 'cyan'],
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
    disabled: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: ActionIconProps) => <ActionIcon {...args} />;
Basic.args = {
  ...actionIconDefault,
};
