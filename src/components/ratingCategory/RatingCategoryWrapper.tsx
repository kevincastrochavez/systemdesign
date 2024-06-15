/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import RatingCategory from './RatingCategory';
import { ratingCategoryProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
  padding: 16px;
`;

function RatingaCategoryWrapper() {
  return (
    <div css={mainContainerCss}>
      <RatingCategory {...ratingCategoryProps} />
    </div>
  );
}

export default RatingaCategoryWrapper;
