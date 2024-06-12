import type { Meta } from '@storybook/react';

import ProductOptions from './ProductOptions';
import { ProductOptionsProps } from '../../utils/types';
import {
  productOptionsDefault,
  productOptionsOutOfStock,
  productOptionsVertical,
} from '../__mocks__/productOptionsMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof ProductOptions> = {
  title: 'Components/ProductOptionsGroup/ProductOptions',
  component: ProductOptions,
  argTypes: {
    space: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
    color: {
      options: ['cyan', 'indigo', 'green', 'orange'],
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: ProductOptionsProps) => (
  <ProductOptions {...args} />
);
Basic.args = {
  ...productOptionsDefault,
};

export const OutOfStock = (args: ProductOptionsProps) => (
  <ProductOptions {...args} />
);
OutOfStock.args = {
  ...productOptionsOutOfStock,
};

export const Vertical = (args: ProductOptionsProps) => (
  <ProductOptions {...args} />
);
Vertical.args = {
  ...productOptionsVertical,
};
