/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import ProductGrid from './ProductGrid';
import { productGridProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  padding: 16px;
`;

function ProductGridWrapper() {
  return (
    <div css={mainContainerCss}>
      <ProductGrid {...productGridProps} />
    </div>
  );
}

export default ProductGridWrapper;
