/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import RatingCategoryGroup from './RatingCategoryGroup';
import { ratingCategoryGroupProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
  padding: 16px;
`;

function RatingCategoryGroupWrapper() {
  return (
    <div css={mainContainerCss}>
      <RatingCategoryGroup {...ratingCategoryGroupProps} />
    </div>
  );
}

export default RatingCategoryGroupWrapper;
