/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { priceProps } from '../../utils/componentObjects';
import Price from './Price';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function PriceWrapper() {
  return (
    <div css={mainContainerCss}>
      <Price {...priceProps} />
    </div>
  );
}

export default PriceWrapper;
