/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import ActionIcon from './ActionIcon';
import { actionIconProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function ActionIconWrapper() {
  return (
    <div css={mainContainerCss}>
      <ActionIcon {...actionIconProps} />
    </div>
  );
}

export default ActionIconWrapper;
