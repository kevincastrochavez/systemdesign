import { IconArrowRight } from '@tabler/icons-react';

const buttonDefault = {
  onclick: () => {},
  text: 'Click me',
  variant: 'default',
  color: 'indigo',
  size: 'sm',
  radius: 'sm',
  disabled: false,
  iconPosition: 'right',
  icon: <IconArrowRight />,
};

const buttonDisabled = {
  onclick: () => {},
  text: 'Click me',
  variant: 'default',
  disabled: true,
  iconPosition: 'right',
  icon: <IconArrowRight />,
};

const buttonIconOnly = {
  onclick: () => {},
  icon: <IconArrowRight />,
};

const buttonTextOnly = {
  onclick: () => {},
  text: 'Click me',
};

export { buttonDefault, buttonDisabled, buttonIconOnly, buttonTextOnly };
