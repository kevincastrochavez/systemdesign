/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { COLORS } from '../../utils/constants';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
  padding: 16px;
`;

const testimonialCardContainerCss = css`
  width: 100%;
  max-width: 340px;
  padding: 24px;
  border-radius: 8px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;

  & img {
    width: 48px;
    border-radius: 50%;
  }

  & h3 {
    font-size: 18px;
    font-weight: semibold;
    line-height: 28px;
  }

  & span {
    color: ${COLORS.secondaryText};
    font-size: 14px;
  }

  & p {
    grid-column: 1 / -1;
    color: ${COLORS.secondaryText};
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
function TestimonialCard({ image: { srcImg, alt }, title, username, text }) {
  return (
    <div css={mainContainerCss}>
      <div css={testimonialCardContainerCss}>
        <img src={srcImg} alt={alt} />
        <div>
          <h3>{title}</h3>
          <span>{username}</span>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
