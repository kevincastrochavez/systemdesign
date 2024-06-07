/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IconUserCircle } from '@tabler/icons-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { AvatarProps } from '../../utils/types';
import { COLORS } from '../../utils/constants';

const avatarContainerCss = css`
  background-color: ${COLORS.grayBackground};
  display: grid;
  place-items: center;
  overflow: hidden;

  // Sizes
  &[data-size='sm'] {
    width: 24px;
    height: 24px;

    & svg {
      width: 16px;
      height: 16px;
    }
  }

  &[data-size='md'] {
    width: 36px;
    height: 36px;

    & svg {
      width: 24px;
      height: 24px;
    }
  }

  &[data-size='lg'] {
    width: 48px;
    height: 48px;

    & svg {
      width: 36px;
      height: 36px;
    }
  }

  &[data-size='xl'] {
    width: 60px;
    height: 60px;

    & svg {
      width: 48px;
      height: 48px;
    }
  }

  // Radius
  &[data-radius='sm'] {
    border-radius: 4px;
  }

  &[data-radius='md'] {
    border-radius: 8px;
  }

  &[data-radius='lg'] {
    border-radius: 12px;
  }

  &[data-radius='full'] {
    border-radius: 50%;
  }

  & svg {
    color: white;
  }

  & img {
    width: 100%;
    object-fit: cover;
  }
`;

/**
 * Avatar component
 * @param {String} src - image source
 * @param {String} alt - alt text
 * @param {String} radius - radius of the avatar ('sm' | 'md' | 'lg' | 'full')
 * @param {String} size - size of the avatar ('sm' | 'md' | 'lg' | 'xl')
 * @returns {JSX.Element}
 */
/** Primary UI component for the Avatar component */
function Avatar({ src, alt, radius = 'full', size = 'lg' }: AvatarProps) {
  if (!src) {
    return (
      <div
        css={avatarContainerCss}
        data-size={size}
        data-radius={radius}
        data-testid='avatar'
      >
        <IconUserCircle data-testid='avatar-icon' />
      </div>
    );
  }

  return (
    <div
      css={avatarContainerCss}
      data-size={size}
      data-radius={radius}
      data-testid='avatar'
    >
      <LazyLoadImage
        src={src}
        alt={alt}
        width={'100%'}
        effect='blur'
        data-testid='avatar-image'
      />
    </div>
  );
}

export default Avatar;
