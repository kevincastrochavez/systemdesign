/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

import { ColorSwatchProps, ColorSwatchesProps } from '../../utils/types';
import ColorSwatch from './ColorSwatch';

const colorSwatchesContainerCss = css`
  display: flex;
  gap: 8px;

  &[data-space='md'] {
    gap: 12px;
  }

  &[data-space='lg'] {
    gap: 16px;
  }

  &[data-orientation='vertical'] {
    flex-direction: column;
  }

  &[data-orientation='vertical'] {
    flex-direction: column;
  }
`;

/**
 * ColorSwatches component
 * @param {[Object]} colorsObj - object containing the colors of the swatches and their availability
 * @param {String} space - space between the swatches ('sm' | 'md' | 'lg')
 * @param {String} shape - shape of the swatches ('squared' | 'rounded')
 * @param {String} orientation - orientation of the swatches ('horizontal' | 'vertical')
 * @returns {JSX.Element}
 */
/** Primary UI component for the ColorSwatches component */
function ColorSwatches({
  colorsObj,
  space = 'md',
  shape = 'rounded',
  orientation = 'horizontal',
}: ColorSwatchesProps) {
  const [optionSelected, setOptionSelected] = useState<number | null>(null);

  const filteredOptions = colorsObj?.filter(Boolean);

  return (
    <div
      css={colorSwatchesContainerCss}
      data-space={space}
      data-orientation={orientation}
      data-testid='color-swatches-container'
    >
      {filteredOptions?.map((color: ColorSwatchProps, index: number) => (
        <ColorSwatch
          key={color.color}
          {...color}
          setOptionSelected={setOptionSelected}
          shape={shape}
          index={index}
          selected={optionSelected === index}
        />
      ))}
    </div>
  );
}

export default ColorSwatches;
