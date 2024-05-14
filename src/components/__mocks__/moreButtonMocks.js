import { IconArrowRight } from '@tabler/icons-react';

const moreButtonDefault = {
  to: '/someLink',
  text: 'Read More',
  icon: <IconArrowRight />,
};

const moreButtonDisabled = {
  to: '/someLink',
  text: 'Read More',
  icon: <IconArrowRight />,
  disabled: true,
};

export { moreButtonDefault, moreButtonDisabled };
