/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ProductSpecificationsProps } from '../../utils/types';
import ProductInformation from '../productInformation/ProductInformation';
import { COLORS } from '../../utils/constants';

const productSpecificationsContainerCss = css`
  font-family: 'Noto Sans', sans-serif;
  display: grid;
  gap: 64px;
  max-width: 1256px;

  @media (min-width: 768px) {
    padding: 32px;
  }
`;

const productSpecificationsHeaderCss = css`
  display: grid;
  gap: 24px;

  h1 {
    margin: 0;
    font-size: 30px;
    line-height: 36px;
    font-weight: 600;

    @media (min-width: 500px) {
      font-size: 48px;
      line-height: 48px;
    }
  }

  p {
    margin: 0;
    font-size: 18px;
    line-height: 28px;
    color: ${COLORS.secondaryText};
  }
`;

/**
 * ProductSpecifications component
 * @param {String} title - title of the specifications
 * @param {String} description - description of the specifications
 * @param {[Object]} tabs - object containing the specifications
 * @returns {JSX.Element}
 */
/** Primary UI component for the ProductSpecifications component */
function ProductSpecifications({
  title,
  description,
  tabs,
}: ProductSpecificationsProps) {
  return (
    <div css={productSpecificationsContainerCss}>
      <div css={productSpecificationsHeaderCss}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <ProductInformation tabs={tabs} />
    </div>
  );
}

export default ProductSpecifications;
