/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ProductSectionProps } from '../../utils/types';
import { COLORS } from '../../utils/constants';

const productSectionCss = css`
  width: 100%;
  font-family: 'Noto Sans', sans-serif;

  h3 {
    margin: 0 0 16px 0;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: ${COLORS.neutral500};
  }
`;

/**
 * ProductSection component
 * @param {String} title - title of the section
 * @param {JSX.Element} productComponent - product component
 * @param {Object} productOptions - options for the product component
 * @returns {JSX.Element}
 */
/** Primary UI component for the ProductSection component */
function ProductSection({
  title,
  productComponent: ProductComponent,
  productOptions,
}: ProductSectionProps) {
  return (
    <div css={productSectionCss}>
      <h3>{title}</h3>

      <ProductComponent {...productOptions} />
    </div>
  );
}

export default ProductSection;
