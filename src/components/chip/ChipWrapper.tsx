/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Chip from './Chip';
import { chipProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function ChipWrapper() {
  return (
    <div css={mainContainerCss}>
      <Chip {...chipProps} />
    </div>
  );
}

export default ChipWrapper;
