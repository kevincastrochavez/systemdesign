/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ProductGridProps } from '../../utils/types';
import ProductCard from '../productCard/ProductCard';

const productGridContainerCss = css`
  display: grid;
  gap: 32px;
  max-width: 1256px;

  @media (min-width: 680px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

/**
 * ProductGrid component
 * @param {Array} products - array of products to be displayed
 * @returns {JSX.Element}
 */
/** Primary UI component for the ProductGrid component */
function ProductGrid({ products }: ProductGridProps) {
  const filteredProducts = products?.filter(Boolean);

  return (
    <div css={productGridContainerCss}>
      {filteredProducts?.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}

export default ProductGrid;
