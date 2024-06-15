/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import ProgressBar from './ProgressBar';
import { progressBarProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function ProgressBarWrapper() {
  return (
    <div css={mainContainerCss}>
      <ProgressBar {...progressBarProps} />
    </div>
  );
}

export default ProgressBarWrapper;
