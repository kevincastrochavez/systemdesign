import type { Meta } from '@storybook/react';

import Price from './Price';
import { PriceProps } from '../../utils/types';
import { noDiscount, priceDefault } from '../__mocks__/priceMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Price> = {
  title: 'Components/Price',
  component: Price,
  argTypes: {
    originalPrice: {
      control: { type: 'number' },
    },
    discountedPrice: {
      control: { type: 'number' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: PriceProps) => <Price {...args} />;
Basic.args = {
  ...priceDefault,
};

export const NoDiscount = (args: PriceProps) => <Price {...args} />;
NoDiscount.args = {
  ...noDiscount,
};
