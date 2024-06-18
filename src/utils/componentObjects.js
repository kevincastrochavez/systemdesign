import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
  IconMail,
  IconMessage,
  IconRecycle,
  IconPaint,
  IconPlant,
  IconDroplet,
  IconShirt,
  IconHandClick,
  IconWind,
  IconColorFilter,
  IconLayersIntersect,
  IconBrandUnity,
  IconShield,
  IconKeyframeAlignCenter,
  IconPentagram,
  IconFeather,
  IconHanger,
  IconBoxMargin,
} from '@tabler/icons-react';

import picture from '../assets/kevin.jpg';
import homePicture from '../assets/home.jpg';
import navBarLogo from '../assets/Logo.png';
import hoddieMain from '../assets/hoddieMain.jpg';
import hoddieOne from '../assets/hoddieOne.jpg';
import hoddieTwo from '../assets/hoddieTwo.jpg';
import hoddieThree from '../assets/hoddieThree.jpg';
import ProductOptions from '../components/productOptions/ProductOptions';
import ColorSwatches from '../components/colorSwatches/ColorSwatches';
import CartControl from '../components/cartControl/CartControl';
import productInfoOne from '../assets/productInfoOne.jpg';
import productInfoTwo from '../assets/productInfoTwo.jpg';
import productInfoThree from '../assets/productInfoThree.jpg';
import productInfoFour from '../assets/productInfoFour.jpg';

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

const emptyStateProps = {
  title: 'No reviews yet!',
  description: 'Be the first to review this product',
  iconObj: {
    color: 'cyan',
    size: 'md',
    shadow: true,
    shape: 'rounded',
    icon: <IconMessage />,
  },
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

const iconProps = {
  color: 'cyan',
  size: 'lg',
  shadow: true,
  shape: 'rounded',
  icon: <IconBrandGithub />,
};

const inputTextProps = {
  labelText: 'Email',
  leftIcon: <IconMail />,
  placeholder: 'Placeholder',
  type: 'password',
  pattern: '^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  hint: 'Hint',
};

const listItemProps = {
  iconObj: {
    icon: <IconRecycle />,
    shadow: true,
  },
  text: 'Recycled Materials',
};

const moreButtonProps = {
  to: '/someLink',
  text: 'Read More',
  icon: <IconArrowRight />,
};

const priceProps = {
  originalPrice: 95,
  discountedPrice: 76,
};

const productDetailsProps = {
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
  title: 'Voyager Hoodie',
  price: {
    originalPrice: 95,
    discountedPrice: 76,
  },
  discountBadge: {
    text: '20% OFF',
    color: 'orange',
  },
  ratingObj: {
    rating: 4.5,
  },
  link: {
    to: '/someLink',
    text: 'See all 62 reviews',
    color: 'indigo',
  },
  description:
    'The Voyager Hoodie is for the explorer at heart. Its durable fabric and roomy pockets are perfect for those who are always searching for the next adventure.',
  productSections: [
    {
      title: 'Available Colors',
      productComponent: ColorSwatches,
      productOptions: {
        colorsObj: [
          {
            color: 'cyan',
            outOfStock: false,
          },
          {
            color: 'indigo',
            outOfStock: false,
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
      },
    },
    {
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
            outOfStock: false,
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
    },

    {
      title: 'Quantity',
      productComponent: CartControl,
      productOptions: {},
    },
  ],
  button: {
    onclick: () => {},
    text: 'Add to Cart',
    width: 'full',
  },
  accordionFeatures: [
    {
      title: 'Features',
      content: [
        'Designed for comfort and durability.',
        'Soft, breathable fabric ideal for travel and adventure.',
        'Large front pocket and adjustable hood.',
        'Stylish design and premium materials.',
        'Minimalist design pairs well with any style.',
      ],
    },
    {
      title: 'Fabric & Care',
      content: [
        'Machine wash cold on a gentle cycle.',
        'Tumble dry low or hang to dry.',
        'Do not use fabric softeners or bleach.',
        'Iron on a low setting if necessary.',
      ],
    },
    {
      title: 'Shipping',
      content: [
        'Free standard shipping on all orders - no minimum spend required.',
        'Expedited shipping available at an additional cost.',
        'Packaged in biodegradable materials to reduce environmental impact.',
      ],
    },
  ],
};

const productInformationProps = {
  tabs: [
    {
      name: 'Sustainability',
      picture: productInfoOne,
      title: 'Eco-Friendly Choice',
      description:
        'With our sustainable approach, we curate clothing that makes a statement of care—care for the planet, and for the art of fashion.',
      items: [
        {
          iconObj: {
            icon: <IconRecycle />,
            shadow: true,
          },
          text: 'Recycled Materials',
        },
        {
          iconObj: {
            icon: <IconPaint />,
            shadow: true,
          },
          text: 'Low Impact Dye',
        },
        {
          iconObj: {
            icon: <IconPlant />,
            shadow: true,
          },
          text: 'Carbon Neutral',
        },
        {
          iconObj: {
            icon: <IconDroplet />,
            shadow: true,
          },
          text: 'Water Conservation',
        },
      ],
    },
    {
      name: 'Comfort',
      picture: productInfoTwo,
      title: 'Uncompromised Comfort',
      description:
        'Our garments are a sanctuary of softness, tailored to drape gracefully and allow for freedom of movement.',
      items: [
        {
          iconObj: {
            icon: <IconShirt />,
            shadow: true,
          },
          text: 'Ergonomic Fits',
        },
        {
          iconObj: {
            icon: <IconHandClick />,
            shadow: true,
          },
          text: 'Soft-to-the-Touch Fabrics',
        },
        {
          iconObj: {
            icon: <IconWind />,
            shadow: true,
          },
          text: 'Breathable Weaves',
        },
        {
          iconObj: {
            icon: <IconColorFilter />,
            shadow: true,
          },
          text: 'Thoughtful Design',
        },
      ],
    },
    {
      name: 'Durability',
      picture: productInfoThree,
      title: 'Built to Lastt',
      description:
        'Here’s to apparel that you can trust to look as good as new, wear after wear, year after year.',
      items: [
        {
          iconObj: {
            icon: <IconLayersIntersect />,
            shadow: true,
          },
          text: 'Reinforced Construction',
        },
        {
          iconObj: {
            icon: <IconBrandUnity />,
            shadow: true,
          },
          text: 'Quality Control',
        },
        {
          iconObj: {
            icon: <IconKeyframeAlignCenter />,
            shadow: true,
          },
          text: 'Material Resilience',
        },
        {
          iconObj: {
            icon: <IconShield />,
            shadow: true,
          },
          text: 'Warranty and Repair',
        },
      ],
    },
    {
      name: 'Versatility',
      picture: productInfoFour,
      title: 'Versatile by Design',
      description:
        'Our pieces are a celebration of versatility, offering a range of styles that are as perfect for a business meeting as they are for a casual brunch. ',
      items: [
        {
          iconObj: {
            icon: <IconBoxMargin />,
            shadow: true,
          },
          text: 'Adaptive Styles',
        },
        {
          iconObj: {
            icon: <IconHanger />,
            shadow: true,
          },
          text: 'Functional Fashion',
        },
        {
          iconObj: {
            icon: <IconFeather />,
            shadow: true,
          },
          text: 'Timeless Aesthetics',
        },
        {
          iconObj: {
            icon: <IconPentagram />,
            shadow: true,
          },
          text: 'Mix-and-Match Potential',
        },
      ],
    },
  ],
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

const productSpecificationsProps = {
  title: 'Discover timeless elegance',
  description:
    "Step into a world where quality meets quintessential charm with our collection. Every thread weaves a promise of unparalleled quality, ensuring that each garment is not just a part of your wardrobe, but a piece of art. Here's the essence of what makes our apparel the hallmark for those with an eye for excellence and a heart for the environment.",
  tabs: [
    {
      name: 'Sustainability',
      picture: productInfoOne,
      title: 'Eco-Friendly Choice',
      description:
        'With our sustainable approach, we curate clothing that makes a statement of care—care for the planet, and for the art of fashion.',
      items: [
        {
          iconObj: {
            icon: <IconRecycle />,
            shadow: true,
          },
          text: 'Recycled Materials',
        },
        {
          iconObj: {
            icon: <IconPaint />,
            shadow: true,
          },
          text: 'Low Impact Dye',
        },
        {
          iconObj: {
            icon: <IconPlant />,
            shadow: true,
          },
          text: 'Carbon Neutral',
        },
        {
          iconObj: {
            icon: <IconDroplet />,
            shadow: true,
          },
          text: 'Water Conservation',
        },
      ],
    },
    {
      name: 'Comfort',
      picture: productInfoTwo,
      title: 'Uncompromised Comfort',
      description:
        'Our garments are a sanctuary of softness, tailored to drape gracefully and allow for freedom of movement.',
      items: [
        {
          iconObj: {
            icon: <IconShirt />,
            shadow: true,
          },
          text: 'Ergonomic Fits',
        },
        {
          iconObj: {
            icon: <IconHandClick />,
            shadow: true,
          },
          text: 'Soft-to-the-Touch Fabrics',
        },
        {
          iconObj: {
            icon: <IconWind />,
            shadow: true,
          },
          text: 'Breathable Weaves',
        },
        {
          iconObj: {
            icon: <IconColorFilter />,
            shadow: true,
          },
          text: 'Thoughtful Design',
        },
      ],
    },
    {
      name: 'Durability',
      picture: productInfoThree,
      title: 'Built to Lastt',
      description:
        'Here’s to apparel that you can trust to look as good as new, wear after wear, year after year.',
      items: [
        {
          iconObj: {
            icon: <IconLayersIntersect />,
            shadow: true,
          },
          text: 'Reinforced Construction',
        },
        {
          iconObj: {
            icon: <IconBrandUnity />,
            shadow: true,
          },
          text: 'Quality Control',
        },
        {
          iconObj: {
            icon: <IconKeyframeAlignCenter />,
            shadow: true,
          },
          text: 'Material Resilience',
        },
        {
          iconObj: {
            icon: <IconShield />,
            shadow: true,
          },
          text: 'Warranty and Repair',
        },
      ],
    },
    {
      name: 'Versatility',
      picture: productInfoFour,
      title: 'Versatile by Design',
      description:
        'Our pieces are a celebration of versatility, offering a range of styles that are as perfect for a business meeting as they are for a casual brunch. ',
      items: [
        {
          iconObj: {
            icon: <IconBoxMargin />,
            shadow: true,
          },
          text: 'Adaptive Styles',
        },
        {
          iconObj: {
            icon: <IconHanger />,
            shadow: true,
          },
          text: 'Functional Fashion',
        },
        {
          iconObj: {
            icon: <IconFeather />,
            shadow: true,
          },
          text: 'Timeless Aesthetics',
        },
        {
          iconObj: {
            icon: <IconPentagram />,
            shadow: true,
          },
          text: 'Mix-and-Match Potential',
        },
      ],
    },
  ],
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

const progressBarProps = {
  value: 70,
  qualityLevel: 'excellent',
};

const ratingProps = {
  rating: 3.5,
};

const ratingCategoryProps = {
  name: 'Excellent',
  progressBar: {
    value: 70,
    qualityLevel: 'excellent',
  },
};

const ratingCategoryGroupProps = {
  ratingCategories: [
    {
      name: 'Excellent',
      progressBar: {
        value: 39,
        qualityLevel: 'excellent',
      },
    },
    {
      name: 'Good',
      progressBar: {
        value: 35,
        qualityLevel: 'good',
      },
    },
    {
      name: 'Average',
      progressBar: {
        value: 15,
        qualityLevel: 'average',
      },
    },
    {
      name: 'Below Average',
      progressBar: {
        value: 7,
        qualityLevel: 'belowAverage',
      },
    },
    {
      name: 'Poor',
      progressBar: {
        value: 4,
        qualityLevel: 'poor',
      },
    },
  ],
};

const reviewProps = {
  name: 'Kevin Castro',
  rating: 3.5,
  date: 'January 1, 2022',
  text: "I've worn it everywhere, super durable and fashionable",
  avatar: {
    src: picture,
    alt: 'Kevin Castro at the Sand Dunes',
  },
};

const reviewSectionProps = {
  reviews: [
    {
      name: 'Kevin Castro',
      rating: 5,
      date: new Date(2023, 0, 1),
      text: "I've worn it everywhere, super durable and fashionable.",
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/1.jpg',
        alt: 'Kevin Castro at the Sand Dunes',
      },
    },
    {
      name: 'Sophia Lee',
      rating: 4.5,
      date: new Date(2023, 1, 2),
      text: 'A bit uncomfortable at first, but they broke in nicely.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/2.jpg',
        alt: 'Sophia Lee enjoying a sunset hike',
      },
    },
    {
      name: 'Liam Johnson',
      rating: 5,
      date: new Date(2023, 2, 3),
      text: 'Stylish but not as durable as expected.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/3.jpg',
        alt: 'Liam Johnson at the city park',
      },
    },
    {
      name: 'Olivia Brown',
      rating: 4.5,
      date: new Date(2023, 3, 4),
      text: 'Color faded after a few washes.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/4.jpg',
        alt: 'Olivia Brown at the beach',
      },
    },
    {
      name: 'Noah Davis',
      rating: 5,
      date: new Date(2023, 4, 5),
      text: 'Not bad, but there are better options out there.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/5.jpg',
        alt: 'Noah Davis at the mountain trail',
      },
    },
    {
      name: 'Emma Martinez',
      rating: 4.5,
      date: new Date(2023, 5, 6),
      text: 'Comfortable but a bit overpriced.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/6.jpg',
        alt: 'Emma Martinez at a forest walk',
      },
    },
    {
      name: 'James Wilson',
      rating: 5,
      date: new Date(2023, 6, 7),
      text: 'Solid product, met my expectations.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/7.jpg',
        alt: 'James Wilson at a coffee shop',
      },
    },
    {
      name: 'Mia Anderson',
      rating: 4.5,
      date: new Date(2023, 7, 8),
      text: 'Great quality, very happy with my purchase.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/8.jpg',
        alt: 'Mia Anderson at a city landmark',
      },
    },
    {
      name: 'William Taylor',
      rating: 5,
      date: new Date(2023, 8, 9),
      text: 'Exceeded my expectations, highly recommend!',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/9.jpg',
        alt: 'William Taylor at a sports event',
      },
    },
    {
      name: 'Ava Thomas',
      rating: 1.5,
      date: new Date(2023, 9, 10),
      text: 'Fantastic product, would buy again.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/10.jpg',
        alt: 'Ava Thomas at a cultural festival',
      },
    },
    {
      name: 'Ethan White',
      rating: 5,
      date: new Date(2023, 10, 11),
      text: 'Best purchase I have made in a long time.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/11.jpg',
        alt: 'Ethan White enjoying a bike ride',
      },
    },
    {
      name: 'Isabella Harris',
      rating: 2,
      date: new Date(2023, 11, 12),
      text: 'Not impressed, returning the product.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/12.jpg',
        alt: 'Isabella Harris at a restaurant',
      },
    },
    {
      name: 'Alexander Clark',
      rating: 2.5,
      date: new Date(2023, 0, 13),
      text: 'Looks good but uncomfortable.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/13.jpg',
        alt: 'Alexander Clark at a conference',
      },
    },
    {
      name: 'Charlotte Lewis',
      rating: 3.5,
      date: new Date(2023, 1, 14),
      text: 'Expected more for the price.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/14.jpg',
        alt: 'Charlotte Lewis at a bookstore',
      },
    },
    {
      name: 'Benjamin Walker',
      rating: 3.5,
      date: new Date(2023, 2, 15),
      text: 'Not as advertised.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/15.jpg',
        alt: 'Benjamin Walker at a workshop',
      },
    },
    {
      name: 'Amelia Robinson',
      rating: 3,
      date: new Date(2023, 3, 16),
      text: 'It’s okay, nothing special.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/16.jpg',
        alt: 'Amelia Robinson at a garden',
      },
    },
    {
      name: 'Lucas Scott',
      rating: 2.5,
      date: new Date(2023, 4, 17),
      text: 'Good but could be better.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/17.jpg',
        alt: 'Lucas Scott at a beach',
      },
    },
    {
      name: 'Harper Young',
      rating: 3,
      date: new Date(2023, 5, 18),
      text: 'Does the job, but nothing outstanding.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/18.jpg',
        alt: 'Harper Young at a hiking trail',
      },
    },
    {
      name: 'Henry King',
      rating: 3.5,
      date: new Date(2023, 6, 19),
      text: 'Pretty decent, would consider buying again.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/19.jpg',
        alt: 'Henry King at a park',
      },
    },
    {
      name: 'Evelyn Wright',
      rating: 4,
      date: new Date(2023, 7, 20),
      text: 'Really good quality, would recommend.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/20.jpg',
        alt: 'Evelyn Wright at a zoo',
      },
    },
    {
      name: 'Michael Perez',
      rating: 4.5,
      date: new Date(2023, 8, 21),
      text: 'Amazing! Surpassed all expectations.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/21.jpg',
        alt: 'Michael Perez at an art gallery',
      },
    },
    {
      name: 'Abigail Campbell',
      rating: 5,
      date: new Date(2023, 9, 22),
      text: 'Absolutely perfect. Will buy again.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/22.jpg',
        alt: 'Abigail Campbell at a music festival',
      },
    },
    {
      name: 'Daniel Parker',
      rating: 0,
      date: new Date(2023, 10, 23),
      text: 'Disappointed with the purchase.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/23.jpg',
        alt: 'Daniel Parker at a conference',
      },
    },
    {
      name: 'Mila Turner',
      rating: 0.5,
      date: new Date(2023, 11, 24),
      text: 'Looks good but lacks functionality.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/24.jpg',
        alt: 'Mila Turner at a sports event',
      },
    },
    {
      name: 'David Phillips',
      rating: 1,
      date: new Date(2023, 0, 25),
      text: 'Not worth the price.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/25.jpg',
        alt: 'David Phillips at a tech expo',
      },
    },
    {
      name: 'Ella Adams',
      rating: 1.5,
      date: new Date(2023, 1, 26),
      text: 'Did not meet my expectations.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/26.jpg',
        alt: 'Ella Adams at a cafe',
      },
    },
    {
      name: 'Joseph Baker',
      rating: 2,
      date: new Date(2023, 2, 27),
      text: 'Average product, nothing special.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/27.jpg',
        alt: 'Joseph Baker at a shopping mall',
      },
    },
    {
      name: 'Aria Nelson',
      rating: 2.5,
      date: new Date(2023, 3, 28),
      text: 'Good value for money.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/28.jpg',
        alt: 'Aria Nelson at a beach resort',
      },
    },
    {
      name: 'Matthew Carter',
      rating: 3,
      date: new Date(2023, 4, 29),
      text: 'Does what it says on the tin.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/29.jpg',
        alt: 'Matthew Carter at a theme park',
      },
    },
    {
      name: 'Scarlett Mitchell',
      rating: 3.5,
      date: new Date(2023, 5, 30),
      text: 'Satisfied with the product, will recommend.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/30.jpg',
        alt: 'Scarlett Mitchell at a nature reserve',
      },
    },
  ],

  // reviews: [],
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
  emptyStateProps,
  galleryProps,
  iconProps,
  inputTextProps,
  listItemProps,
  moreButtonProps,
  priceProps,
  productDetailsProps,
  productInformationProps,
  productOptionsProps,
  productSectionProps,
  productSpecificationsProps,
  profileCardProps,
  progressBarProps,
  ratingProps,
  ratingCategoryProps,
  ratingCategoryGroupProps,
  reviewProps,
  reviewSectionProps,
  socialBarProps,
  testimonialCardProps,
  navBarProps,
};
