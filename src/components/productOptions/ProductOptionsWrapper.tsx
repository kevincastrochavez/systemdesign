/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import ProductOptions from './ProductOptions';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function ProductOptionsWrapper() {
  const productOptionsProps = {
    optionName: 'Size',
    optionsObj: [
      {
        name: 'XS',
        outOfStock: false,
      },
      {
        name: 'S',
        outOfStock: true,
      },
      {
        name: 'M',
        outOfStock: false,
      },
      {
        name: 'L',
        outOfStock: false,
      },
      {
        name: 'XL',
        outOfStock: false,
      },
    ],
    space: 'sm',
    orientation: 'horizontal',
  };

  return (
    <div css={mainContainerCss}>
      <ProductOptions {...productOptionsProps} />
    </div>
  );
}

export default ProductOptionsWrapper;
