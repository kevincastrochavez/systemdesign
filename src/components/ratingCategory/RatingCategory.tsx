/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { RatingCategoryProps } from '../../utils/types';
import ProgressBar from '../progressBar/ProgressBar';
import { COLORS } from '../../utils/constants';

const ratingCategoryContainerCss = css`
  font-family: 'Noto Sans', sans-serif;
  display: grid;
  align-items: center;
  grid-template-columns: 115px 1fr 42px;
  gap: 8px;
  width: 100%;
  max-width: 768px;

  p {
    margin: 0;
    color: ${COLORS.secondaryText};

    &:last-of-type {
      min-width: 42px;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

/**
 * RatingCategory component
 * @param {String} name - name of the category ('Excellent' | 'Good' | 'Average' | 'Below Average' | 'Poor')
 * @param {Object} progressBar - progress bar object
 * @returns {JSX.Element}
 */
/** Primary UI component for the RatingCategory component */
function RatingCategory({ name, progressBar }: RatingCategoryProps) {
  return (
    <div css={ratingCategoryContainerCss}>
      <p>{name}</p>
      <ProgressBar {...progressBar} />
      <p>{progressBar?.value}%</p>
    </div>
  );
}

export default RatingCategory;
