/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import EmptyState from './EmptyState';
import { emptyStateProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function EmptyStateWrapper() {
  return (
    <div css={mainContainerCss}>
      <EmptyState {...emptyStateProps} />
    </div>
  );
}

export default EmptyStateWrapper;
