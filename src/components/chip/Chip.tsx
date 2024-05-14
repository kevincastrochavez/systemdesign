/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ChipProps } from '../../utils/types';
import { COLORS } from '../../utils/constants';

const chipContainerCss = css`
  padding: 2px 8px;
  font-size: 14px;
  line-height: 20px;
  background: ${COLORS.green50};
  border: 1px solid ${COLORS.green200};
  color: ${COLORS.green700};
  border-radius: 100px;
`;

/**
 * Chip component
 * @param {String} text - text to be displayed
 * @returns {JSX.Element}
 */
/** Primary UI component for the Chip component */
function Chip({ text }: ChipProps) {
  return <span css={chipContainerCss}>{text}</span>;
}

export default Chip;
