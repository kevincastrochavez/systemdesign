/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import TestimonialCard from './TestimonialCard';
import { testimonialCardProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function TestimonialCardWrapper() {
  return (
    <div css={mainContainerCss}>
      <TestimonialCard {...testimonialCardProps} />
    </div>
  );
}

export default TestimonialCardWrapper;
