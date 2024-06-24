/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import ProductCard from './ProductCard';
import { productCardProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function ProductCardWrapper() {
  return (
    <div css={mainContainerCss}>
      <ProductCard {...productCardProps} />
    </div>
  );
}

export default ProductCardWrapper;
