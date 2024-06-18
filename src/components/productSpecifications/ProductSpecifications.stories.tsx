import type { Meta } from '@storybook/react';

import ProductSpecifications from './ProductSpecifications';
import { ProductSpecificationsProps } from '../../utils/types';
import { productSpecificationsDefault } from '../__mocks__/productSpecificationsMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof ProductSpecifications> = {
  title: 'Components/ProductSpecificationsGroup/ProductSpecifications',
  component: ProductSpecifications,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: ProductSpecificationsProps) => (
  <ProductSpecifications {...args} />
);
Basic.args = {
  ...productSpecificationsDefault,
};
