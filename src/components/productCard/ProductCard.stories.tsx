import type { Meta } from '@storybook/react';

import ProductCard from './ProductCard';
import { ProductCardProps } from '../../utils/types';
import { productCardDefault } from '../__mocks__/productCardMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductGridGroup/ProductCard',
  component: ProductCard,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: ProductCardProps) => <ProductCard {...args} />;
Basic.args = {
  ...productCardDefault,
};
