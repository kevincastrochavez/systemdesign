import type { Meta } from '@storybook/react';

import Input from './Input';
import { InputProps } from '../../utils/types';
import {
  inputDefault,
  inputDisabled,
  inputEmail,
  inputPassword,
} from '../__mocks__/inputMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      options: ['text', 'email', 'password'],
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: InputProps) => <Input {...args} />;
Basic.args = {
  ...inputDefault,
};

export const Disabled = (args: InputProps) => <Input {...args} />;
Disabled.args = {
  ...inputDisabled,
};

export const Email = (args: InputProps) => <Input {...args} />;
Email.args = {
  ...inputEmail,
};

export const Password = (args: InputProps) => <Input {...args} />;
Password.args = {
  ...inputPassword,
};
