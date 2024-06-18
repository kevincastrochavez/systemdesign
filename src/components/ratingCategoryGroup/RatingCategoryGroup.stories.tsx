import type { Meta } from '@storybook/react';

import RatingCategoryGroup from './RatingCategoryGroup';
import { RatingCategoryGroupProps } from '../../utils/types';
import { ratingCategoryGroupDefault } from '../__mocks__/ratingCategoryGroupMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof RatingCategoryGroup> = {
  title: 'Components/ReviewSectionGroup/RatingCategoryGroup',
  component: RatingCategoryGroup,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: RatingCategoryGroupProps) => (
  <RatingCategoryGroup {...args} />
);
Basic.args = {
  ...ratingCategoryGroupDefault,
};
