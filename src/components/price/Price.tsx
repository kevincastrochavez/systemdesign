/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { PriceProps } from '../../utils/types';
import { COLORS } from '../../utils/constants';

const priceContainerCss = css`
  font-family: 'Noto Sans', sans-serif;
  display: flex;
  gap: 8px;

  p {
    margin: 0;
    font-size: 30px;
    line-height: 36px;
    color: ${COLORS.secondaryText};
  }

  span {
    font-size: 18px;
    line-height: 28px;
    color: ${COLORS.disabledText};
    text-decoration: line-through;
    align-self: end;
  }
`;

/**
 * Price component
 * @param {Number} originalPrice - original price of the product
 * @param {Number} discountedPrice - discounted price of the product
 * @returns {JSX.Element}
 */
/** Primary UI component for the Price component */
function Price({ originalPrice, discountedPrice }: PriceProps) {
  return (
    <div css={priceContainerCss}>
      <p>${discountedPrice || originalPrice}</p>
      {discountedPrice && <span>${originalPrice}</span>}
    </div>
  );
}

export default Price;
