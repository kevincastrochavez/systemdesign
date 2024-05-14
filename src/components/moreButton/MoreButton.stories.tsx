import type { Meta } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';

import MoreButton from './MoreButton';
import { MoreButtonProps } from '../../utils/types';
import {
  moreButtonDefault,
  moreButtonDisabled,
} from '../__mocks__/moreButtonMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof MoreButton> = {
  title: 'Components/MoreButton',
  component: MoreButton,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: MoreButtonProps) => <MoreButton {...args} />;
Basic.args = {
  ...moreButtonDefault,
};

export const Disabled = (args: MoreButtonProps) => <MoreButton {...args} />;
Disabled.args = {
  ...moreButtonDisabled,
};
