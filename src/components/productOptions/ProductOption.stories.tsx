import type { Meta } from '@storybook/react';

import ProductOption from './ProductOption';
import { ProductOptionProps } from '../../utils/types';
import {
  productOptionDefault,
  productOptionDisabled,
  productOptionSelected,
  productOptionSelectedDisabled,
} from '../__mocks__/productOptionsMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof ProductOption> = {
  title: 'Components/ProductOptionsGroup/ProductOption',
  component: ProductOption,
  argTypes: {
    outOfStock: {
      control: { type: 'boolean' },
    },
    selected: {
      control: { type: 'boolean' },
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

export const Basic = (args: ProductOptionProps) => <ProductOption {...args} />;
Basic.args = {
  ...productOptionDefault,
};

export const Selected = (args: ProductOptionProps) => (
  <ProductOption {...args} />
);
Selected.args = {
  ...productOptionSelected,
};

export const Disabled = (args: ProductOptionProps) => (
  <ProductOption {...args} />
);
Disabled.args = {
  ...productOptionDisabled,
};

export const SelectedDisabled = (args: ProductOptionProps) => (
  <ProductOption {...args} />
);
SelectedDisabled.args = {
  ...productOptionSelectedDisabled,
};
