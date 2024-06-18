/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import ProductInformation from './ProductInformation';
import { productInformationProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  padding: 40px 16px;
`;

function ProductInformationWrapper() {
  return (
    <div css={mainContainerCss}>
      <ProductInformation {...productInformationProps} />
    </div>
  );
}

export default ProductInformationWrapper;
