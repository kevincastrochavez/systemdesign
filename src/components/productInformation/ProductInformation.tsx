/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { COLORS } from '../../utils/constants';
import ListItem from '../listItem/ListItem';
import { ProductInfoProps, TabProps } from '../../utils/types';

const productInformationContainerCss = css`
  font-family: 'Noto Sans', sans-serif;
  width: 100%;
  max-width: 1256px;
  overflow: hidden;
  display: grid;
  gap: 32px;
`;

const productInformationHeaderCss = css`
  overflow-x: scroll;
  display: flex;
  gap: 24px;
  border-bottom: 1px solid ${COLORS.neutral300};

  &::-webkit-scrollbar {
    display: none;
  }

  span {
    font-weight: 500;
    padding: 0 8px 12px;
    cursor: pointer;
    color: ${COLORS.secondaryText};
    transition: all 0.3s ease-in-out;
    border-bottom: 2px solid transparent;

    &[data-selected='true'] {
      border-bottom: 2px solid ${COLORS.cyan600};
      color: ${COLORS.cyan700};
    }

    &:hover {
      color: ${COLORS.cyan700};
    }
  }
`;

const productInformationContentCss = css`
  display: grid;
  gap: 32px;

  & img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const productInformationDescriptionCss = css`
  display: grid;
  gap: 32px;
`;

const productInformationTitleCss = css`
  display: grid;
  gap: 8px;

  h2 {
    margin: 0;
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
  }

  p {
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    color: ${COLORS.secondaryText};
  }
`;

const productInformationListCss = css`
  display: grid;
  gap: 16px;
  padding: 12px 4px;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 48px;
    row-gap: 32px;
  }
`;

/**
 * ProductInformation component
 * @param {[Object]} tabs - tabs to be displayed
 * @returns {JSX.Element}
 */
/** Primary UI component for the ProductInformation component */
function ProductInformation({ tabs }: ProductInfoProps) {
  const [tabSelected, setTabSelected] = useState(0);

  const tabHeaders = tabs.map((tab: TabProps) => tab.name);
  const tabContent = tabs[tabSelected]; // Current tab content to be displayed

  return (
    <section css={productInformationContainerCss}>
      <header css={productInformationHeaderCss}>
        {tabHeaders.map((tab: any, index: number) => (
          <span
            key={index}
            onClick={() => setTabSelected(index)}
            data-selected={index === tabSelected}
            data-testid={'tab-header'}
          >
            {tab}
          </span>
        ))}
      </header>

      <div css={productInformationContentCss}>
        <LazyLoadImage src={tabContent.picture} alt={tabContent.name} />

        <div css={productInformationDescriptionCss}>
          <div css={productInformationTitleCss}>
            <h2>{tabContent.title}</h2>
            <p>{tabContent.description}</p>
          </div>

          <div css={productInformationListCss}>
            {tabContent.items.map((item: any, index: number) => (
              <ListItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductInformation;
