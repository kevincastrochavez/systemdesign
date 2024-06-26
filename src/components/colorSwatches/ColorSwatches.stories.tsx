import type { Meta } from '@storybook/react';

import ColorSwatches from './ColorSwatches';
import { ColorSwatchesProps } from '../../utils/types';
import {
  colorSwatchesDefault,
  colorSwatchesOutOfStock,
  colorSwatchesVertical,
} from '../__mocks__/colorSwatchesMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof ColorSwatches> = {
  title: 'Components/ColorSwatchesGroup/ColorSwatches',
  component: ColorSwatches,
  argTypes: {
    space: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    shape: {
      options: ['squared', 'rounded'],
      control: { type: 'select' },
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'lg'],
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: ColorSwatchesProps) => <ColorSwatches {...args} />;
Basic.args = {
  ...colorSwatchesDefault,
};

export const OutOfStock = (args: ColorSwatchesProps) => (
  <ColorSwatches {...args} />
);
OutOfStock.args = {
  ...colorSwatchesOutOfStock,
};

export const Vertical = (args: ColorSwatchesProps) => (
  <ColorSwatches {...args} />
);
Vertical.args = {
  ...colorSwatchesVertical,
};
