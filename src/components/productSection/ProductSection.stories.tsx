import type { Meta } from '@storybook/react';

import ProductSection from './ProductSection';
import { ProductSectionProps } from '../../utils/types';
import {
  productSectionColors,
  productSectionDefault,
  productSectionQuantity,
} from '../__mocks__/productSectionMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof ProductSection> = {
  title: 'Components/ProductSection',
  component: ProductSection,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: ProductSectionProps) => (
  <ProductSection {...args} />
);
Basic.args = {
  ...productSectionDefault,
};

export const Colors = (args: ProductSectionProps) => (
  <ProductSection {...args} />
);
Colors.args = {
  ...productSectionColors,
};

export const Quantity = (args: ProductSectionProps) => (
  <ProductSection {...args} />
);
Quantity.args = {
  ...productSectionQuantity,
};

export const Sizes = (args: ProductSectionProps) => (
  <ProductSection {...args} />
);
Sizes.args = {
  ...productSectionDefault,
};
