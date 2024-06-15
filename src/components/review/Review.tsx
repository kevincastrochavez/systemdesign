/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ReviewProps } from '../../utils/types';
import Avatar from '../avatar/Avatar';
import Rating from '../rating/Rating';
import { COLORS } from '../../utils/constants';

const reviewContainerCss = css`
  width: 100%;
  max-width: 768px;
  font-family: 'Noto Sans', sans-serif;
  display: grid;
  gap: 16px;
`;

const reviewInfoContainerCss = css`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  gap: 16px;
`;

const reviewDetailsContainerCss = css`
  display: grid;
  gap: 8px;
`;

const reviewTitleContainerCss = css`
  display: flex;
  align-items: center;

  & p {
    margin: 0;
    flex: 1;
    font-weight: 600;
  }

  & span {
    font-size: 12px;
    line-height: 16px;
    color: ${COLORS.secondaryText};
  }
`;

const reviewTextCss = css`
  color: ${COLORS.secondaryText};
`;

/**
 * Review component
 * @param {String} name - name of the reviewer
 * @param {String} date - date of the review
 * @param {Number} rating - rating of the review
 * @param {String} text - text of the review
 * @param {Object} avatar - avatar of the reviewer
 * @returns {JSX.Element}
 */
/** Primary UI component for the Review component */
function Review({ name, date, rating, text, avatar }: ReviewProps) {
  return (
    <div css={reviewContainerCss}>
      <div css={reviewInfoContainerCss}>
        <Avatar {...avatar} />

        <div css={reviewDetailsContainerCss}>
          <div css={reviewTitleContainerCss}>
            <p>{name}</p>

            <span>{date}</span>
          </div>

          <Rating rating={rating} />
        </div>
      </div>

      <div css={reviewTextCss}>{text}</div>
    </div>
  );
}

export default Review;
