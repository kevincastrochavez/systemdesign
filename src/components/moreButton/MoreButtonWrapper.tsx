/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import MoreButton from './MoreButton';
import { moreButtonProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function MoreButtonWrapper() {
  return (
    <div css={mainContainerCss}>
      <MoreButton {...moreButtonProps} />
    </div>
  );
}

export default MoreButtonWrapper;
