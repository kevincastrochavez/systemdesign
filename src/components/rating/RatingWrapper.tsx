/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Rating from './Rating';
import { ratingProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function RatingWrapper() {
  return (
    <div css={mainContainerCss}>
      <Rating {...ratingProps} />
    </div>
  );
}

export default RatingWrapper;
