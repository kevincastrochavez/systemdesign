import type { Meta } from '@storybook/react';

import Icon from './Icon';
import { IconProps } from '../../utils/types';
import { iconDefault, iconNoShadow, iconSquared } from '../__mocks__/iconMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    color: {
      options: ['green', 'indigo', 'orange', 'cyan'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    shadow: {
      control: { type: 'boolean' },
    },
    shape: {
      options: ['rounded', 'square'],
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: IconProps) => <Icon {...args} />;
Basic.args = {
  ...iconDefault,
};

export const NoShadow = (args: IconProps) => <Icon {...args} />;
NoShadow.args = {
  ...iconNoShadow,
};

export const Squared = (args: IconProps) => <Icon {...args} />;
Squared.args = {
  ...iconSquared,
};
