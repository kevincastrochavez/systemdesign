import { IconMail, IconKey } from '@tabler/icons-react';

const inputDefault = {
  labelText: 'Full Name',
  placeholder: 'Kevin Castro',
};

const inputDisabled = {
  labelText: 'Full Name',
  placeholder: 'Kevin Castro',
  disabled: true,
};

const inputEmail = {
  labelText: 'Email',
  leftIcon: <IconMail />,
  placeholder: 'kevin@test.com',
  type: 'email',
  pattern: '^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  errorMessage: 'Please enter a valid email address',
};

const inputPassword = {
  labelText: 'Password',
  leftIcon: <IconKey />,
  placeholder: '$tr0ngp4ssw0rd',
  type: 'password',
  pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
  hint: 'Must be at least 8 characters long and include at least 1 number and 1 special character',
  errorMessage: 'Password does not meet the requirements.',
};

export { inputDefault, inputDisabled, inputEmail, inputPassword };
