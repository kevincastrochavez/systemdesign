/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ChipProps } from '../../utils/types';
import { COLORS } from '../../utils/constants';

const chipContainerCss = css`
  padding: 2px 8px;
  font-size: 14px;
  line-height: 20px;
  border-radius: 100px;

  &[data-color='green'] {
    color: ${COLORS.green700};
    border: 1px solid ${COLORS.green200};
    background: ${COLORS.green50};
  }

  &[data-color='indigo'] {
    color: ${COLORS.indigo700};
    border: 1px solid ${COLORS.indigo200};
    background: ${COLORS.indigo50};
  }

  &[data-color='orange'] {
    color: ${COLORS.orange700};
    border: 1px solid ${COLORS.orange200};
    background: ${COLORS.orange50};
  }

  &[data-color='cyan'] {
    color: ${COLORS.cyan700};
    border: 1px solid ${COLORS.cyan200};
    background: ${COLORS.cyan50};
  }
`;

/**
 * Chip component
 * @param {String} text - text to be displayed
 * @param {String} color - color of the chip ('green' | 'indigo' | 'orange' | 'cyan')
 * @returns {JSX.Element}
 */
/** Primary UI component for the Chip component */
function Chip({ text, color = 'green' }: ChipProps) {
  return (
    <span css={chipContainerCss} data-color={color}>
      {text}
    </span>
  );
}

export default Chip;
