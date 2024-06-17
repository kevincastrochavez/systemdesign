/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import ReviewSection from './ReviewSection';
import { reviewSectionProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  padding: 40px 24px;

  @media (min-width: 768px) {
    padding: 40px 32px;
  }
`;

function ReviewSectionWrapper() {
  return (
    <div css={mainContainerCss}>
      <ReviewSection {...reviewSectionProps} />
    </div>
  );
}

export default ReviewSectionWrapper;
