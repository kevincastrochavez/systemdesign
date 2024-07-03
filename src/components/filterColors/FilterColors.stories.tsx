import type { Meta } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';

import FilterColors from './FilterColors';
import { FilterColorsProps } from '../../utils/types';
import { filterColorsDefault } from '../__mocks__/filterColorsMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof FilterColors> = {
  title: 'Components/FiltersGroup/FilterColors',
  component: FilterColors,
  decorators: [withRouter],
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: FilterColorsProps) => <FilterColors {...args} />;
Basic.args = {
  ...filterColorsDefault,
};
