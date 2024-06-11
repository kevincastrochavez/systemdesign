/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { RatingProps } from '../../utils/types';

const starContainerCss = css`
  display: flex;
`;

const starCss = css`
  width: 20px;
  height: 20px;
  -webkit-clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  margin: 0 2px;
  position: relative;

  &[data-size='md'] {
    width: 24px;
    height: 24px;
  }

  &[data-size='lg'] {
    width: 28px;
    height: 28px;
  }

  &[data-size='xl'] {
    width: 32px;
    height: 32px;
  }

  &::before {
    content: '';
    display: block;
    width: var(--width);
    height: 100%;
    background: gold;
    clip-path: inherit;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

/**
 * Rating component
 * @param {Number} rating - rating value
 * @param {String} size - size of the stars ('sm' | 'md' | 'lg' | 'xl')
 * @returns {JSX.Element}
 */
/** Primary UI component for the Rating component */
function Rating({ rating = 1, size = 'sm' }: RatingProps) {
  const maxStars = 5;

  return (
    <div css={starContainerCss}>
      {Array.from({ length: maxStars }, (_, index) => {
        const starFill =
          index + 1 <= rating ? 1 : index < rating ? rating - index : 0;

        return (
          <span
            css={starCss}
            data-size={size}
            key={index}
            style={{
              background: starFill
                ? 'linear-gradient(90deg, gold 50%, lightgray 50%)'
                : 'lightgray',
              '--width': starFill ? `${starFill * 100}%` : '0%',
            }}
          ></span>
        );
      })}
    </div>
  );
}

export default Rating;
