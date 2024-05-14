import { IconArrowRight } from '@tabler/icons-react';

import homePicture from '../../assets/home.jpg';

const blogCardComplete = {
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

const blogCardNoImage = {
  title: 'Top 5 Living Room Inspirations.',
  description:
    'Curated vibrants colors for your living, make it pop & calm in the same time.',
  ctaText: 'Read More',
  ctaLink: '/someLink',
  ctaIcon: <IconArrowRight />,
  chips: ['Interior', 'Living Room'],
};

const blogCardLongTitle = {
  image: homePicture,
  imageAlt: 'Living Room Inspiration',
  title: 'Top 5 Living Room Inspirations. Top 5 Living Room Inspirations.',
  description:
    'Curated vibrants colors for your living, make it pop & calm in the same time.',
  ctaText: 'Read More',
  ctaLink: '/someLink',
  ctaIcon: <IconArrowRight />,
  chips: ['Interior', 'Living Room'],
};

const blogCardManyChips = {
  image: homePicture,
  imageAlt: 'Living Room Inspiration',
  title: 'Top 5 Living Room Inspirations.',
  description:
    'Curated vibrants colors for your living, make it pop & calm in the same time.',
  ctaText: 'Read More',
  ctaLink: '/someLink',
  ctaIcon: <IconArrowRight />,
  chips: ['Interior', 'Living Room', 'Interior', 'Living Room'],
};

const blogCardNoChips = {
  image: homePicture,
  imageAlt: 'Living Room Inspiration',
  title: 'Top 5 Living Room Inspirations.',
  description:
    'Curated vibrants colors for your living, make it pop & calm in the same time.',
  ctaText: 'Read More',
  ctaLink: '/someLink',
  ctaIcon: <IconArrowRight />,
  chips: [],
};

const blogCardLongDescription = {
  image: homePicture,
  imageAlt: 'Living Room Inspiration',
  title: 'Top 5 Living Room Inspirations.',
  description:
    'Curated vibrants colors for your living, make it pop & calm in the same time. Curated vibrants colors for your living, make it pop & calm in the same time.',
  ctaText: 'Read More',
  ctaLink: '/someLink',
  ctaIcon: <IconArrowRight />,
  chips: ['Interior', 'Living Room'],
};

export {
  blogCardComplete,
  blogCardNoImage,
  blogCardLongTitle,
  blogCardManyChips,
  blogCardNoChips,
  blogCardLongDescription,
};
