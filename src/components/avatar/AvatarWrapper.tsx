/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Avatar from './Avatar';
import { avatarProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 120px;
`;

function AvatarWrapper() {
  return (
    <div css={mainContainerCss}>
      <Avatar {...avatarProps} />
    </div>
  );
}

export default AvatarWrapper;
