import type { Meta } from '@storybook/react';

import ProductGrid from './ProductGrid';
import { ProductGridProps } from '../../utils/types';
import { productGridDefault } from '../__mocks__/productGridMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof ProductGrid> = {
  title: 'Components/ProductGridGroup/ProductGrid',
  component: ProductGrid,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: ProductGridProps) => <ProductGrid {...args} />;
Basic.args = {
  ...productGridDefault,
};
