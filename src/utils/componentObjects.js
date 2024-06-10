import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
  IconMail,
} from '@tabler/icons-react';

import picture from '../assets/kevin.jpg';
import homePicture from '../assets/home.jpg';

const actionIconProps = {
  variant: 'filled',
  color: 'cyan',
  size: 'lg',
  radius: 'sm',
  disabled: false,
  icon: <IconBrandGithub />,
  onClick: () => {},
};

const avatarProps = {
  src: picture,
  alt: 'Kevin Castro at the Sand Dunes',
  size: 'lg',
  radius: 'full',
};

const blogCardProps = {
  image: homePicture,
  imageAlt: 'Living Room Inspiration',
  title: 'Top 5 Living Room Inspirations.',
  description:
    'Curated vibrants colors for your living, make it pop & calm in the same time.',
  moreButton: {
    to: '/someLink',
    text: 'Read More',
    icon: <IconArrowRight />,
  },
  chips: [
    {
      text: 'Living Room',
      color: 'green',
    },
    {
      text: 'Inspiration',
      color: 'green',
    },
  ],
};

const buttonProps = {
  onclick: () => {},
  text: 'Read More',
  disabled: false,
  iconPosition: 'right',
  icon: <IconArrowRight />,
};

const chipProps = {
  text: 'Interior',
};

const inputTextProps = {
  labelText: 'Email',
  leftIcon: <IconMail />,
  placeholder: 'Placeholder',
  type: 'password',
  pattern: '^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  hint: 'Hint',
};

const moreButtonProps = {
  to: '/someLink',
  text: 'Read More',
  icon: <IconArrowRight />,
};

const profileCardProps = {
  image: {
    src: picture,
    alt: 'Kevin Castro at the Sand Dunes',
  },
  title: 'Kevin Castro',
  subtitle: 'FrontEnd Engineer @ Tesla',
  text: 'You will never find an engineer like me. This is your chance. Hire me now or someone else will!',
  button: {
    text: 'Contact Me',
  },
  socialBar: {
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
  },
};

const socialBarProps = {
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
  color: 'cyan',
};

const testimonialCardProps = {
  image: {
    src: picture,
    alt: 'Kevin Castro at the Sand Dunes',
  },
  title: 'Kevin Castro Chavez',
  username: '@kevincastro',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
};

export {
  actionIconProps,
  avatarProps,
  blogCardProps,
  buttonProps,
  chipProps,
  inputTextProps,
  moreButtonProps,
  profileCardProps,
  socialBarProps,
  testimonialCardProps,
};
