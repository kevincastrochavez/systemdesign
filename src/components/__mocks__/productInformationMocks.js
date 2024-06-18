import {
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
  IconKeyframeAlignCenter,
  IconShield,
  IconBoxMargin,
  IconHanger,
  IconFeather,
  IconPentagram,
} from '@tabler/icons-react';

import productInfoOne from '../../assets/productInfoOne.jpg';
import productInfoTwo from '../../assets/productInfoTwo.jpg';
import productInfoThree from '../../assets/productInfoThree.jpg';
import productInfoFour from '../../assets/productInfoFour.jpg';

const productInformationDefault = {
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

export { productInformationDefault };
