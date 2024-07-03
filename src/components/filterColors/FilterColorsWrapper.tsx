/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import FilterColors from './FilterColors';
import { filterColorProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function FilterColorsWrapper() {
  return (
    <div css={mainContainerCss}>
      <FilterColors {...filterColorProps} />
    </div>
  );
}

export default FilterColorsWrapper;
