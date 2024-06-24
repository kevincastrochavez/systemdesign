/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import ColorSwatches from '../colorSwatches/ColorSwatches';
import Price from '../price/Price';
import { ProductCardProps } from '../../utils/types';

const productCardCss = css`
  font-family: 'Noto Sans', sans-serif;
  display: grid;

  & img {
    border-radius: 8px;
    width: 300px;
    max-width: 300px;
    height: 300px;
    object-fit: cover;
  }
`;

const productCardDetailsCss = css`
  margin: 16px 0 30px;
  display: grid;
  gap: 12px;

  h3 {
    margin: 0;
    font-size: 18px;
    line-height: 28px;
    font-weight: 500;
  }

  & > div {
    display: flex;
    align-items: center;

    p {
      font-size: 18px;
    }

    span {
      font-size: 12px;
      align-self: center;
    }
  }
`;

/**
 * ProductCard component
 * @param {Object} imgInfo - image information
 * @param {String} name - name of the product
 * @param {Object} price - price of the product
 * @param {Object} colorSwatchesProps - color swatches props
 * @returns {JSX.Element}
 */
/** Primary UI component for the ProductCard component */
function ProductCard({
  imgInfo,
  name,
  price,
  colorSwatchesProps,
}: ProductCardProps) {
  return (
    <div css={productCardCss}>
      <LazyLoadImage {...imgInfo} effect='blur' />

      <section css={productCardDetailsCss}>
        <h3>{name}</h3>

        <Price {...price} />

        <ColorSwatches {...colorSwatchesProps} />
      </section>
    </div>
  );
}

export default ProductCard;
