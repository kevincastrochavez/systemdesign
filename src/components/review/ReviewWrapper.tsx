/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Review from './Review';
import { reviewProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
  padding: 0 16px;
`;

function ReviewWrapper() {
  return (
    <div css={mainContainerCss}>
      <Review {...reviewProps} />
    </div>
  );
}

export default ReviewWrapper;
