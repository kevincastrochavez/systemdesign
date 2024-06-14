import type { Meta } from '@storybook/react';

import EmptyState from './EmptyState';
import { EmptyStateProps } from '../../utils/types';
import {
  emptyStateDefault,
  emptyStateNoIcon,
} from '../__mocks__/emptyStateMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: EmptyStateProps) => <EmptyState {...args} />;
Basic.args = {
  ...emptyStateDefault,
};

export const NoIcon = (args: EmptyStateProps) => <EmptyState {...args} />;
NoIcon.args = {
  ...emptyStateNoIcon,
};
