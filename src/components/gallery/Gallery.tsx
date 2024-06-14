/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { GalleryProps } from '../../utils/types';
import { COLORS } from '../../utils/constants';

const galleryContainerCss = css`
  width: 100%;
  max-width: 768px;
  overflow: hidden;

  & > img {
    border-radius: 10px;
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

const thumbnailContainerCss = css`
  margin-top: 24px;
  display: flex;
  gap: 16px;
  overflow-x: scroll;

  & img {
    border-radius: 8px;
    height: 120px;
    min-width: 80px;
    object-fit: cover;
    object-position: bottom;
    cursor: pointer;

    &[data-selected='true'] {
      border: 3px solid ${COLORS.indigo600};
    }

    @media (min-width: 500px) {
      min-width: 188px;
      height: 190px;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

/**
 * Gallery component
 * @param {Array} images - array of images to be displayed
 * @returns {JSX.Element}
 */
/** Primary UI component for the Gallery component */
function Gallery({ images }: GalleryProps) {
  const [picturedShown, setPicturedShown] = useState(0);
  const mainImage = images[picturedShown];

  return (
    <div css={galleryContainerCss}>
      <img src={mainImage.src} alt={mainImage.alt} />

      {images.length > 1 && (
        <div css={thumbnailContainerCss} data-testid='gallery-thumbnails'>
          {images.map(({ src, alt }, index) => (
            <LazyLoadImage
              key={index}
              src={src}
              alt={alt}
              width={'100%'}
              effect='blur'
              data-selected={picturedShown === index}
              data-testid='gallery-image'
              onClick={() => setPicturedShown(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
