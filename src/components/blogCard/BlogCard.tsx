/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { BlogCardProps } from '../../utils/types';
import { COLORS } from '../../utils/constants';
import Chip from '../chip/Chip';
import MoreButton from '../moreButton/MoreButton';

const blogCardContainerCss = css`
  display: grid;
  width: 340px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  overflow: hidden;
  font-family: sans-serif;

  & img {
    width: 100%;
    height: 288px;
    object-fit: cover;
  }

  & ul {
    margin: 0;
    padding-left: 0;
    height: 23px;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: nowrap;
    margin-bottom: 8px;
    list-style: none;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  & li {
    flex: none;
  }

  & h3 {
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    margin: 0;
  }

  & p {
    line-height: 24px;
    margin-top: 12px;
    margin-bottom: 24px;
    color: ${COLORS.secondaryText};
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
  }
`;

const cardInfoContainerCss = css`
  padding: 24px 16px;
`;

/**
 * BlogCard component
 * @param {String} image - image source
 * @param {String} title - title of the card
 * @param {String} description - description of the card
 * @param {String} ctaText - text of the CTA
 * @param {String} ctaLink - link of the CTA
 * @param {ReactNode} ctaIcon - icon of the CTA
 * @param {String[]} chips - chips of the card
 * @returns {JSX.Element}
 */
/** Primary UI component for the BlogCard component */
function BlogCard({
  image,
  imageAlt,
  title,
  description,
  ctaText,
  ctaLink,
  ctaIcon,
  chips,
}: BlogCardProps) {
  return (
    <div css={blogCardContainerCss}>
      {image && <img src={image} alt={imageAlt} />}

      <div css={cardInfoContainerCss}>
        {chips && chips.length > 0 && (
          <ul>
            {chips.map((chip, index) => (
              <li key={index}>
                <Chip text={chip} />
              </li>
            ))}
          </ul>
        )}

        <h3>{title}</h3>
        <p>{description}</p>
        <MoreButton to={ctaLink} text={ctaText} icon={ctaIcon} />
      </div>
    </div>
  );
}

export default BlogCard;
