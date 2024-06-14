/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import ProductDetails from './ProductDetails';
import { productDetailsProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  padding: 16px;

  @media (min-width: 768px) {
    padding: 32px;
  }
`;

function ProductDetailsWrapper() {
  return (
    <div css={mainContainerCss}>
      <ProductDetails {...productDetailsProps} />
    </div>
  );
}

export default ProductDetailsWrapper;
