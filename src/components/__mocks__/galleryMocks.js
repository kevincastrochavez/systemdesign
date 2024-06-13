import hoddieMain from '../../assets/hoddieMain.jpg';
import hoddieOne from '../../assets/hoddieOne.jpg';
import hoddieTwo from '../../assets/hoddieTwo.jpg';
import hoddieThree from '../../assets/hoddieThree.jpg';

const galleryDefault = {
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

const galleryNoThumbnails = {
  images: [
    {
      src: hoddieMain,
      alt: 'Hoddie Main',
    },
  ],
};

const galleryTwoThumbnails = {
  images: [
    {
      src: hoddieMain,
      alt: 'Hoddie Main',
    },
    {
      src: hoddieTwo,
      alt: 'Hoddie Two',
    },
  ],
};

export { galleryDefault, galleryNoThumbnails, galleryTwoThumbnails };
