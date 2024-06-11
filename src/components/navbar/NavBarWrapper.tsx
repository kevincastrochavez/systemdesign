/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import NavBar from './NavBar';
import { navBarProps } from '../../utils/componentObjects';

const mainContainerCss = css``;

function NavBarWrapper() {
  return (
    <div css={mainContainerCss}>
      <NavBar {...navBarProps} />
    </div>
  );
}

export default NavBarWrapper;
