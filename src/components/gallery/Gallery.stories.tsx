import type { Meta } from '@storybook/react';

import Gallery from './Gallery';
import { GalleryProps } from '../../utils/types';
import {
  galleryDefault,
  galleryNoThumbnails,
  galleryTwoThumbnails,
} from '../__mocks__/galleryMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Gallery> = {
  title: 'Components/Gallery',
  component: Gallery,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: GalleryProps) => <Gallery {...args} />;
Basic.args = {
  ...galleryDefault,
};

export const NoThumbnails = (args: GalleryProps) => <Gallery {...args} />;
NoThumbnails.args = {
  ...galleryNoThumbnails,
};

export const TwoThumbnails = (args: GalleryProps) => <Gallery {...args} />;
TwoThumbnails.args = {
  ...galleryTwoThumbnails,
};
