/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Icon from './Icon';
import { iconProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function IconWrapper() {
  return (
    <div css={mainContainerCss}>
      <Icon {...iconProps} />
    </div>
  );
}

export default IconWrapper;
