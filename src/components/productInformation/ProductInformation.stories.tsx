import type { Meta } from '@storybook/react';

import ProductInformation from './ProductInformation';
import { ProductInfoProps } from '../../utils/types';
import { productInformationDefault } from '../__mocks__/productInformationMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof ProductInformation> = {
  title: 'Components/ProductSpecificationsGroup/ProductInformation',
  component: ProductInformation,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: ProductInfoProps) => (
  <ProductInformation {...args} />
);
Basic.args = {
  ...productInformationDefault,
};
