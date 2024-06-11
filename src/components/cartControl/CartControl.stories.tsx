import type { Meta } from '@storybook/react';

import CartControl from './CartControl';
import { CartControlProps } from '../../utils/types';
import { cartControlDefault } from '../__mocks__/cartControlMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof CartControl> = {
  title: 'Components/CartControl',
  component: CartControl,
  argTypes: {
    radius: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    minValue: {
      control: { type: 'number' },
    },
    maxValue: {
      control: { type: 'number' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: CartControlProps) => <CartControl {...args} />;
Basic.args = {
  ...cartControlDefault,
};
