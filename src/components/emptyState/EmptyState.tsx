/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { EmptyStateProps } from '../../utils/types';
import Icon from '../icon/Icon';

const iconContainerCss = css`
  font-family: 'Noto Sans', sans-serif;
  width: 100%;
  padding: 24px;
  display: grid;
  justify-items: center;
  gap: 20px;
`;

const iconMessageContainerCss = css`
  display: grid;
  justify-items: center;
  gap: 8px;

  h4 {
    margin: 0;
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
    text-align: center;
  }

  p {
    margin: 0;
    line-height: 24px;
    text-align: center;
  }
`;

/**
 * EmptyState component
 * @param {String} title - text to be displayed
 * @param {String} description - text to be displayed
 * @param {Object} iconObj - icon object
 * @returns {JSX.Element}
 */
/** Primary UI component for the EmptyState component */
function EmptyState({ title, description, iconObj }: EmptyStateProps) {
  return (
    <div css={iconContainerCss}>
      {iconObj && <Icon {...iconObj} />}

      <div css={iconMessageContainerCss}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default EmptyState;
