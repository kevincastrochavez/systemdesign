import type { Meta } from '@storybook/react';

import ListItem from './ListItem';
import { ListItemProps } from '../../utils/types';
import { listItemDefault } from '../__mocks__/listItemMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof ListItem> = {
  title: 'Components/ProductSpecificationsGroup/ListItem',
  component: ListItem,
  argTypes: {
    space: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: ListItemProps) => <ListItem {...args} />;
Basic.args = {
  ...listItemDefault,
};
