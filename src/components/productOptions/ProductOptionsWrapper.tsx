/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import ProductOptions from './ProductOptions';
import { productOptionsProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function ProductOptionsWrapper() {
  return (
    <div css={mainContainerCss}>
      <ProductOptions {...productOptionsProps} />
    </div>
  );
}

export default ProductOptionsWrapper;
