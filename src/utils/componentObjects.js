import picture from '../assets/kevin.jpg';
import homePicture from '../assets/home.jpg';

import { IconArrowRight } from '@tabler/icons-react';

const testimonialCardProps = {
  image: {
    srcImg: picture,
    alt: 'Kevin Castro at the Sand Dunes',
  },
  title: 'Kevin Castro Chavez',
  username: '@kevincastro',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
};

const moreButtonProps = {
  to: '/someLink',
  text: 'Read More',
  icon: <IconArrowRight />,
};

const chipProps = {
  text: 'Interior',
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

export { testimonialCardProps, moreButtonProps, chipProps, blogCardProps };
