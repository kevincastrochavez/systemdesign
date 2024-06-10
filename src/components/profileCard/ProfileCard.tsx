/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Avatar from '../avatar/Avatar';
import { COLORS } from '../../utils/constants';
import Button from '../button/Button';
import SocialBar from '../socialBar/SocialBar';
import { ProfileCardProps } from '../../utils/types';

const profileCardContainerCss = css`
  font-family: 'Noto Sans', sans-serif;
  box-sizing: border-box;
  width: 340px;
  padding: 24px 16px;
  border: 1px solid ${COLORS.grayBorder};
  background: white;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const profileCardTopCss = css`
  display: grid;
  justify-items: center;
  gap: 24px;

  p {
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${COLORS.secondaryText};

    /* Truncate text */
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
  }
`;

const profileCardTitleCss = css`
  display: grid;
  justify-items: center;
  gap: 4px;

  h1 {
    margin: 0;
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
  }

  h2 {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${COLORS.secondaryText};
  }
`;

const profileCardBottomCss = css`
  margin-top: 40px;

  & > div {
    margin-top: 24px;
  }
`;

/**
 * ProfileCard component
 * @param {Object} image - image source and alt text
 * @param {String} title - title of the card
 * @param {String} subtitle - subtitle of the card
 * @param {String} text - text of the card
 * @param {Object} button - button props
 * @param {Object} socialBar - social bar props
 */
/** Primary UI component for Profile Card */
function ProfileCard({
  image,
  title,
  subtitle,
  text,
  button,
  socialBar,
}: ProfileCardProps) {
  return (
    <div css={profileCardContainerCss}>
      <div css={profileCardTopCss}>
        <Avatar size='xl' radius='full' {...image} />

        <div css={profileCardTitleCss}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>

        <p>{text}</p>
      </div>

      <div css={profileCardBottomCss}>
        <Button {...button} />

        {socialBar && <SocialBar {...socialBar} />}
      </div>
    </div>
  );
}

export default ProfileCard;
