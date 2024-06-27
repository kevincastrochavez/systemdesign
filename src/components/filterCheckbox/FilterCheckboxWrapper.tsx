/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import FilterCheckbox from './FilterCheckbox';
import { filterCheckboxProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function FilterCheckboxWrapper() {
  return (
    <div css={mainContainerCss}>
      <FilterCheckbox {...filterCheckboxProps} />
    </div>
  );
}

export default FilterCheckboxWrapper;
