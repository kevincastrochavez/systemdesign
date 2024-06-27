import type { Meta } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';

import FilterCheckbox from './FilterCheckbox';
import { FilterCheckboxProps } from '../../utils/types';
import { filterCheckboxDefault } from '../__mocks__/filterCheckboxMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof FilterCheckbox> = {
  title: 'Components/FiltersGroup/FilterCheckbox',
  component: FilterCheckbox,
  decorators: [withRouter],
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: FilterCheckboxProps) => (
  <FilterCheckbox {...args} />
);
Basic.args = {
  ...filterCheckboxDefault,
};
