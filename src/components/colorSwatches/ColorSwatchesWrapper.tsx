/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import ColorSwatches from './ColorSwatches';
import { colorSwatchesProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function ColorSwatchesWrapper() {
  return (
    <div css={mainContainerCss}>
      <ColorSwatches {...colorSwatchesProps} />
    </div>
  );
}

export default ColorSwatchesWrapper;
