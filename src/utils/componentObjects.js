import { IconArrowRight, IconBrandGithub } from '@tabler/icons-react';

import picture from '../assets/kevin.jpg';
import homePicture from '../assets/home.jpg';

const actionIconProps = {
  variant: 'outline',
  color: 'indigo',
  size: 'xl',
  radius: 'sm',
  disabled: false,
  icon: <IconBrandGithub />,
  onClick: () => {},
};

const avatarProps = {
  src: picture,
  alt: 'Kevin Castro at the Sand Dunes',
  size: 'md',
  radius: 'full',
};

const blogCardProps = {
  image: homePicture,
  imageAlt: 'Living Room Inspiration',
  title: 'Top 5 Living Room Inspirations.',
  description:
    'Curated vibrants colors for your living, make it pop & calm in the same time.',
  ctaText: 'Read More',
  ctaLink: '/someLink',
  ctaIcon: <IconArrowRight />,
  chips: ['Interior', 'Living Room'],
};

const buttonProps = {
  onclick: () => {},
  text: 'Read More',
  variant: 'outline',
  color: 'indigo',
  size: 'sm',
  radius: 'sm',
  width: 'fit-content',
  disabled: false,
  iconPosition: 'right',
  icon: <IconArrowRight />,
};

const chipProps = {
  text: 'Interior',
};

const moreButtonProps = {
  to: '/someLink',
  text: 'Read More',
  icon: <IconArrowRight />,
};

const testimonialCardProps = {
  image: {
    srcImg: picture,
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
  moreButtonProps,
  testimonialCardProps,
};
