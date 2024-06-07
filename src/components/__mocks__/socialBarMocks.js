import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
} from '@tabler/icons-react';

const socialBarDefault = {
  actionIcons: [
    {
      icon: <IconBrandGithub />,
      variant: 'transparent',
      onClick: () => {},
    },
    {
      icon: <IconBrandLinkedin />,
      variant: 'transparent',
      onClick: () => {},
    },
    {
      icon: <IconBrandInstagram />,
      variant: 'transparent',
      onClick: () => {},
    },
    {
      icon: <IconBrandX />,
      variant: 'transparent',
      onClick: () => {},
    },
  ],
  color: 'indigo',
  size: 'md',
  width: 'full',
  separation: 'xl',
};

export { socialBarDefault };
