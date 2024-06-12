import type { Meta } from '@storybook/react';

import ColorSwatch from './ColorSwatch';
import { ColorSwatchProps } from '../../utils/types';
import {
  colorSwatchDefault,
  colorSwatchDisabled,
  colorSwatchSelected,
  colorSwatchSelectedDisabled,
  colorSwatchSquared,
} from '../__mocks__/colorSwatchesMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof ColorSwatch> = {
  title: 'Components/ColorSwatchesGroup/ColorSwatch',
  component: ColorSwatch,
  argTypes: {
    color: {
      options: ['cyan', 'indigo', 'green', 'orange'],
      control: { type: 'select' },
    },
    outOfStock: {
      control: { type: 'boolean' },
    },
    shape: {
      options: ['squared', 'rounded'],
      control: { type: 'select' },
    },
    selected: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: ColorSwatchProps) => <ColorSwatch {...args} />;
Basic.args = {
  ...colorSwatchDefault,
};

export const Squared = (args: ColorSwatchProps) => <ColorSwatch {...args} />;
Squared.args = {
  ...colorSwatchSquared,
};

export const Selected = (args: ColorSwatchProps) => <ColorSwatch {...args} />;
Selected.args = {
  ...colorSwatchSelected,
};

export const OutOfStock = (args: ColorSwatchProps) => <ColorSwatch {...args} />;
OutOfStock.args = {
  ...colorSwatchDisabled,
};

export const SelectedOutOfStock = (args: ColorSwatchProps) => (
  <ColorSwatch {...args} />
);
SelectedOutOfStock.args = {
  ...colorSwatchSelectedDisabled,
};
