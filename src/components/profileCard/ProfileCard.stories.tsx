import type { Meta } from '@storybook/react';

import ProfileCard from './ProfileCard';
import { ProfileCardProps } from '../../utils/types';
import {
  profileCardDefault,
  profileCardNoSocialBar,
} from '../__mocks__/profileCardMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof ProfileCard> = {
  title: 'Components/ProfileCard',
  component: ProfileCard,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: ProfileCardProps) => <ProfileCard {...args} />;
Basic.args = {
  ...profileCardDefault,
};

export const NoSocialBar = (args: ProfileCardProps) => (
  <ProfileCard {...args} />
);
NoSocialBar.args = {
  ...profileCardNoSocialBar,
};
