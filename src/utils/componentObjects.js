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
import navBarLogo from '../assets/Logo.png';
import hoddieMain from '../assets/hoddieMain.jpg';
import hoddieOne from '../assets/hoddieOne.jpg';
import hoddieTwo from '../assets/hoddieTwo.jpg';
import hoddieThree from '../assets/hoddieThree.jpg';
import ProductOptions from '../components/productOptions/ProductOptions';

const accordionProps = {
  title: 'Features',
  content: [
    'Designed for comfort and durability.',
    'Soft, breathable fabric ideal for travel and adventure.',
    'Large front pocket and adjustable hood.',
    'Stylish design and premium materials.',
    'Minimalist design pairs well with any style.',
  ],
};

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

const colorSwatchesProps = {
  colorsObj: [
    {
      color: 'cyan',
      outOfStock: false,
    },
    {
      color: 'indigo',
      outOfStock: true,
    },
    {
      color: 'green',
      outOfStock: false,
    },
    {
      color: 'orange',
      outOfStock: false,
    },
  ],
  space: 'sm',
  orientation: 'horizontal',
  shape: 'rounded',
};

const galleryProps = {
  images: [
    {
      src: hoddieMain,
      alt: 'Hoddie Main',
    },
    {
      src: hoddieTwo,
      alt: 'Hoddie Two',
    },
    {
      src: hoddieOne,
      alt: 'Hoddie One',
    },
    {
      src: hoddieThree,
      alt: 'Hoddie Three',
    },
  ],
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

const ratingProps = {
  rating: 3.5,
};

const priceProps = {
  originalPrice: 95,
  discountedPrice: 76,
};

const productOptionsProps = {
  optionName: 'Size',
  optionsObj: [
    {
      name: 'XS',
      outOfStock: false,
    },
    {
      name: 'S',
      outOfStock: true,
    },
    {
      name: 'M',
      outOfStock: false,
    },
    {
      name: 'L',
      outOfStock: false,
    },
    {
      name: 'XL',
      outOfStock: false,
    },
  ],
  space: 'sm',
  orientation: 'horizontal',
};

const productSectionProps = {
  title: 'Available Sizes',
  productComponent: ProductOptions,
  productOptions: {
    optionName: 'Size',
    optionsObj: [
      {
        name: 'XS',
        outOfStock: false,
      },
      {
        name: 'S',
        outOfStock: true,
      },
      {
        name: 'M',
        outOfStock: false,
      },
      {
        name: 'L',
        outOfStock: false,
      },
      {
        name: 'XL',
        outOfStock: false,
      },
    ],
    space: 'sm',
    orientation: 'horizontal',
  },
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

const navBarProps = {
  logoInfo: {
    src: navBarLogo,
    alt: 'Abstractly logo, featuring the letter A as the main letter',
  },
  links: [
    {
      text: 'Home',
      to: '/home',
    },
    {
      text: 'Features',
      to: '/features',
    },
    {
      text: 'Pricing',
      to: '/pricing',
    },
    {
      text: 'About us',
      to: '/aboutus',
    },
    {
      text: 'Contact',
      to: '/contact',
    },
  ],
  buttonsDesktop: [
    {
      text: 'Learn more',
      variant: 'default',
      size: 'sm',
      width: 'fit-content',
    },
    {
      text: 'Try it out',
      color: 'indigo',
      size: 'sm',
      width: 'fit-content',
    },
  ],
  buttonsMobile: [
    {
      text: 'Learn more',
      variant: 'default',
      size: 'sm',
    },
    {
      text: 'Try it out',
      color: 'indigo',
      size: 'sm',
    },
  ],
};

export {
  accordionProps,
  actionIconProps,
  avatarProps,
  blogCardProps,
  buttonProps,
  chipProps,
  colorSwatchesProps,
  galleryProps,
  inputTextProps,
  moreButtonProps,
  ratingProps,
  priceProps,
  productOptionsProps,
  productSectionProps,
  profileCardProps,
  socialBarProps,
  testimonialCardProps,
  navBarProps,
};
