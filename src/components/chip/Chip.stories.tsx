import type { Meta } from '@storybook/react';

import Chip from './Chip';
import { ChipProps } from '../../utils/types';
import { chipDefault, chipLong } from '../__mocks__/chipMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    color: {
      options: ['green', 'indigo', 'orange', 'cyan'],
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: ChipProps) => <Chip {...args} />;
Basic.args = {
  ...chipDefault,
};

export const LongChip = (args: ChipProps) => <Chip {...args} />;
LongChip.args = {
  ...chipLong,
};
