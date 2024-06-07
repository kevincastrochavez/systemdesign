/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import SocialBar from './SocialBar';
import { socialBarProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function SocialBarWrapper() {
  return (
    <div css={mainContainerCss}>
      <SocialBar {...socialBarProps} />
    </div>
  );
}

export default SocialBarWrapper;
