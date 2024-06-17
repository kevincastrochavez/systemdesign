/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import ListItem from './ListItem';
import { listItemProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function ListItemWrapper() {
  return (
    <div css={mainContainerCss}>
      <ListItem {...listItemProps} />
    </div>
  );
}

export default ListItemWrapper;
