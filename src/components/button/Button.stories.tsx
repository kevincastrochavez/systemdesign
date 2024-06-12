import type { Meta } from '@storybook/react';

import Button from './Button';
import { ButtonProps } from '../../utils/types';
import {
  buttonDefault,
  buttonDisabled,
  buttonIconOnly,
  buttonTextOnly,
} from '../__mocks__/buttonMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
  argTypes: {
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'select' },
    },
    variant: {
      options: ['default', 'filled', 'light', 'outline'],
      control: { type: 'select' },
    },
    color: {
      options: ['green', 'indigo', 'orange', 'cyan'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    radius: {
      options: ['sm', 'md', 'lg', 'full'],
      control: { type: 'select' },
    },
    width: {
      options: ['fit-content', 'full'],
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: ButtonProps) => <Button {...args} />;
Basic.args = {
  ...buttonDefault,
};

export const Disabled = (args: ButtonProps) => <Button {...args} />;
Disabled.args = {
  ...buttonDisabled,
  disabled: true,
};

export const IconOnly = (args: ButtonProps) => <Button {...args} />;
IconOnly.args = {
  ...buttonIconOnly,
};

export const TextOnly = (args: ButtonProps) => <Button {...args} />;
TextOnly.args = {
  ...buttonTextOnly,
};
