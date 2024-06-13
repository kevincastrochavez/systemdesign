/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import ProductSection from './ProductSection';
import { productSectionProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
  padding: 0 16px;
`;

function ProductSectionWrapper() {
  return (
    <div css={mainContainerCss}>
      <ProductSection {...productSectionProps} />
    </div>
  );
}

export default ProductSectionWrapper;
