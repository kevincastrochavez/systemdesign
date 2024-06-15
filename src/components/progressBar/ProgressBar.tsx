/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { COLORS } from '../../utils/constants';
import { ProgressBarProps } from '../../utils/types';

const progressBarContainerCss = css`
  min-width: 100px;
  width: 100%;
  max-width: 768px;
  overflow: hidden;
  height: 8px;
  background: ${COLORS.grayBackgroundDisabled};
  border-radius: 10px;
`;

const progressBarCss = (value: number, color: string) => css`
  width: ${value}%;
  height: 100%;
  background: ${color};
  border-radius: 10px;
`;

/**
 * @param {Number} value - value of the progress bar
 * @param {String} qualityLevel - quality of the progress bar ('excellent' | ''good' | 'average' | 'belowAverage' | 'poor')
 */
/** Primary UI component for the ProgressBar component */
function ProgressBar({ value, qualityLevel = 'excellent' }: ProgressBarProps) {
  let color;

  switch (qualityLevel) {
    case 'good':
      color = COLORS.green500;
      break;
    case 'average':
      color = COLORS.yellow300;
      break;
    case 'belowAverage':
      color = COLORS.yellow500;
      break;
    case 'poor':
      color = COLORS.red600;
      break;

    default:
      color = COLORS.green600;
      break;
  }

  return (
    <div css={progressBarContainerCss} data-testid='progress-bar-container'>
      <div css={progressBarCss(value, color)} data-testid='progress-bar'></div>
    </div>
  );
}

export default ProgressBar;
