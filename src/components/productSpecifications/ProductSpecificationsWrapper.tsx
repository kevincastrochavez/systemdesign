/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import ProductSpecifications from './ProductSpecifications';
import { productSpecificationsProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 40px;
  padding: 0 16px;
`;

function ProductSpecificationsWrapper() {
  return (
    <div css={mainContainerCss}>
      <ProductSpecifications {...productSpecificationsProps} />
    </div>
  );
}

export default ProductSpecificationsWrapper;
