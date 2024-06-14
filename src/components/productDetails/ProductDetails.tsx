/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Gallery from '../gallery/Gallery';
import { COLORS } from '../../utils/constants';
import Button from '../button/Button';
import ProductSection from '../productSection/ProductSection';
import Price from '../price/Price';
import Chip from '../chip/Chip';
import Rating from '../rating/Rating';
import MoreButton from '../moreButton/MoreButton';
import Accordion from '../accordion/Accordion';
import { ProductDetailsProps } from '../../utils/types';

const productDetailsCss = css`
  font-family: 'Noto Sans', sans-serif;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    & > div:first-of-type {
      height: fit-content;
      position: sticky;
      top: 32px;
    }
  }
`;

const productDetailsContainerCss = css`
  display: grid;
  gap: 40px;
`;

const productDetailsInfoCss = css`
  display: grid;
  gap: 32px;

  p {
    color: ${COLORS.secondaryText};
    line-height: 24px;
  }
`;

const productDetailsAccordionCss = css`
  /* display: grid; */
  /* gap: 32px; */
`;

const productHeaderContainerCss = css`
  display: grid;
  gap: 20px;

  h1 {
    font-size: 30px;
    line-height: 36px;
    margin-top: 48px;

    @media (min-width: 768px) {
      margin-top: 0;
    }
  }
`;

const productMetaDataContainerCss = css`
  display: grid;
  gap: 8px;
`;

const priceWrapperCss = css`
  display: grid;
  gap: 12px;
`;

const reviewRatingCss = css`
  display: flex;
  align-items: center;
  gap: 8px;

  & span:first-of-type {
    font-size: 20px;
    line-height: 28px;
  }
`;

const productOptionsContainerCss = css`
  display: grid;
  gap: 32px;
`;

function ProductDetails({
  images,
  title,
  price,
  discountBadge,
  ratingObj,
  link,
  description,
  productSections,
  button,
  accordionFeatures,
}: ProductDetailsProps) {
  return (
    <div css={productDetailsCss}>
      <Gallery images={images} />

      <div css={productDetailsContainerCss}>
        <div css={productDetailsInfoCss}>
          <div css={productHeaderContainerCss}>
            <h1>{title}</h1>

            <div css={productMetaDataContainerCss}>
              <div css={priceWrapperCss}>
                <Price {...price} />
                {discountBadge && <Chip {...discountBadge} />}
              </div>

              <div css={reviewRatingCss}>
                <span>{ratingObj.rating}</span>
                <Rating {...ratingObj} />
                <MoreButton {...link} />
              </div>
            </div>
          </div>

          <p>{description}</p>

          <div css={productOptionsContainerCss}>
            {productSections.map((section: any, index: number) => (
              <ProductSection key={index} {...section} />
            ))}
          </div>

          <Button {...button} color='indigo' />
        </div>

        <div css={productDetailsAccordionCss}>
          {accordionFeatures.map((feature: any, index: number) => (
            <Accordion key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
