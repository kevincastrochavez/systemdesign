/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

import FilterColor from './FilterColor';
import { FilterColorsProps } from '../../utils/types';

const filterColorsContainerCss = css`
  display: flex;
  gap: 8px;
`;

/**
 * FilterColors component
 * @param {Array} colors - array of colors to be displayed
 */
/** Primary UI component for the FilterColors component */
function FilterColors({ colors }: FilterColorsProps) {
  const [colorSelected, setColorSelected] = useState('');

  return (
    <div css={filterColorsContainerCss}>
      {colors?.map((color) => (
        <FilterColor
          key={color}
          color={color}
          setColorSelected={setColorSelected}
          colorSelected={colorSelected}
        />
      ))}
    </div>
  );
}

export default FilterColors;
