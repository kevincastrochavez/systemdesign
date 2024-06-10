/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Input from './Input';
import { inputTextProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
  padding: 0 16px;
`;

function InputWrapper() {
  return (
    <div css={mainContainerCss}>
      <Input {...inputTextProps} />
    </div>
  );
}

export default InputWrapper;
