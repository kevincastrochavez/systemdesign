import { IconArrowRight } from '@tabler/icons-react';

import homePicture from '../../assets/home.jpg';

const blogCardComplete = {
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

const blogCardNoImage = {
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

const blogCardLongTitle = {
  image: homePicture,
  imageAlt: 'Living Room Inspiration',
  title: 'Top 5 Living Room Inspirations. Top 5 Living Room Inspirations.',
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

const blogCardManyChips = {
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

const blogCardNoChips = {
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
  chips: [],
};

const blogCardLongDescription = {
  image: homePicture,
  imageAlt: 'Living Room Inspiration',
  title: 'Top 5 Living Room Inspirations.',
  description:
    'Curated vibrants colors for your living, make it pop & calm in the same time. Curated vibrants colors for your living, make it pop & calm in the same time.',
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

export {
  blogCardComplete,
  blogCardNoImage,
  blogCardLongTitle,
  blogCardManyChips,
  blogCardNoChips,
  blogCardLongDescription,
};
