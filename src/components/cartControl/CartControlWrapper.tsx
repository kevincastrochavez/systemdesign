/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import CartControl from './CartControl';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function CartControlWrapper() {
  return (
    <div css={mainContainerCss}>
      <CartControl />
    </div>
  );
}

export default CartControlWrapper;
