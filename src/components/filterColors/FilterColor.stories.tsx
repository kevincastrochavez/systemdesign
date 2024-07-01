import type { Meta } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';

import FilterColor from './FilterColor';
import { FilterColorProps } from '../../utils/types';
import { filterColorMockDefault } from '../__mocks__/filterColorMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof FilterColor> = {
  title: 'Components/FilterColor',
  component: FilterColor,
  decorators: [withRouter],
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

export const Basic = (args: FilterColorProps) => <FilterColor {...args} />;
Basic.args = {
  ...filterColorMockDefault,
};
