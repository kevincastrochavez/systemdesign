import picture from '../assets/kevin.jpg';

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

export { testimonialCardProps, moreButtonProps, chipProps };
