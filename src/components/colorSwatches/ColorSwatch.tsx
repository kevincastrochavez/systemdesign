/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IconCheck, IconPointOff } from '@tabler/icons-react';

import { ColorSwatchProps } from '../../utils/types';
import { COLORS } from '../../utils/constants';

const colorSwatchContainerCss = css`
  padding: 10px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;

  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: -1px;
  }
`;

const colorSwatchCircleCss = css`
  display: block;
  width: 38px;
  height: 38px;
  border-radius: 100px;
  border: 2.3px solid transparent;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 2.3px solid ${COLORS.indigo200};
  }

  &[data-shape='squared'] {
    border-radius: 8px;
  }

  &[data-color='cyan'] {
    background-color: ${COLORS.cyan700};
  }

  &[data-color='indigo'] {
    background-color: ${COLORS.indigo700};
  }

  &[data-color='green'] {
    background-color: ${COLORS.green700};
  }

  &[data-color='orange'] {
    background-color: ${COLORS.orange700};
  }

  &[data-selected='true'] {
    width: calc(38px - 2.3px);
    height: calc(38px - 2.3px);
    outline: 2px solid ${COLORS.indigo700};
    outline-offset: 2.3px;
  }
`;

/**
 * ColorSwatch component
 * @param {String} color - color of the swatch ('cyan' | 'indigo' | 'green' | 'orange')
 * @param {Boolean} outOfStock - whether the swatch is out of stock
 * @param {Function} setOptionSelected - function to be called when the swatch is selected
 * @param {Number} index - index of the swatch
 * @param {Boolean} selected - whether the swatch is selected
 * @param {String} shape - shape of the swatch ('squared' | 'rounded')
 * @returns {JSX.Element}
 */
/** Primary UI component for the ColorSwatch component */
function ColorSwatch({
  color,
  outOfStock = false,
  shape,
  setOptionSelected,
  index,
  selected,
}: ColorSwatchProps) {
  return (
    <div
      css={colorSwatchContainerCss}
      data-testid={`color-swatch-container`}
      onClick={() => setOptionSelected(index)}
    >
      {selected && !outOfStock && (
        <IconCheck size={30} color={'white'} data-testid='icon-check' />
      )}
      {outOfStock && (
        <IconPointOff
          size={44}
          color={COLORS.neutral300}
          data-testid='icon-point-off'
        />
      )}

      <span
        css={colorSwatchCircleCss}
        data-selected={selected}
        data-color={color}
        data-shape={shape}
        data-testid={`color-swatch-${color}`}
      ></span>
    </div>
  );
}

export default ColorSwatch;
