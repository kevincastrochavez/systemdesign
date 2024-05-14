/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { COLORS } from '../../utils/constants';
import { TestimonialCardProps } from '../../utils/types';

const cardContainerCss = css`
  width: 100%;
  max-width: 340px;
  padding: 24px;
  border-radius: 8px;
  background: white;
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  font-family: sans-serif;

  & img {
    width: 48px;
    border-radius: 50%;
  }

  & p {
    grid-column: 1 / -1;
    color: ${COLORS.secondaryText};
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    margin: 0;
  }
`;

const cardHeaderCss = css`
  &:not([has-username='true']) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & h3 {
    font-size: 18px;
    font-weight: semibold;
    line-height: 28px;
    width: 220px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }

  & span {
    color: ${COLORS.secondaryText};
    font-size: 14px;
  }
`;

/**
 * TestimonialCard component
 * @param {Object: {srcImg: String, alt: String}} image - image source and alt text
 * @param {String} title - title of the card
 * @param {String} username - username of the card
 * @param {String} text - text of the card
 * @returns {JSX.Element}
 */
/** Primary UI component for Testimonial Card */
function TestimonialCard({
  image,
  title,
  username,
  text,
}: TestimonialCardProps) {
  const { srcImg, alt } = image || {};

  return (
    <div css={cardContainerCss}>
      {srcImg && (
        <LazyLoadImage src={srcImg} alt={alt} width={'100%'} effect='blur' />
      )}

      <div has-username={username} css={cardHeaderCss}>
        <h3>{title}</h3>
        {username && <span>{username}</span>}
      </div>
      <p>{text}</p>
    </div>
  );
}

export default TestimonialCard;
