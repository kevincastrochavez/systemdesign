/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import { MoreButtonProps } from '../../utils/types';
import { COLORS } from '../../utils/constants';

const linkCss = css`
  color: ${COLORS.indigo700};
  transition: color 0.3s ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    transition: all 0.3s ease-in-out;
    width: 20px;
  }

  &:hover {
    color: ${COLORS.indigo800};

    svg {
      transform: translateX(4px);
      color: ${COLORS.indigo800};
    }
  }
`;

const disabledLinkCss = css`
  pointer-events: none;
  color: ${COLORS.disabledText};
`;

/**
 * MoreButton component
 * @param {String} to - link to be redirected to
 * @param {String} text - text to be displayed
 * @param {ReactNode} icon - icon to be displayed
 * @param {Boolean} disabled - whether the button is disabled
 * @returns {JSX.Element}
 */
/** Primary UI component for the More Button component */
function MoreButton({ to, text, icon, disabled = false }: MoreButtonProps) {
  return (
    <Link to={to} css={[linkCss, disabled && disabledLinkCss]}>
      {text} {icon}
    </Link>
  );
}

export default MoreButton;
