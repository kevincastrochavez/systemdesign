/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Button from './Button';
import { buttonProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function ButtonWrapper() {
  return (
    <div css={mainContainerCss}>
      <Button {...buttonProps} />
    </div>
  );
}

export default ButtonWrapper;
