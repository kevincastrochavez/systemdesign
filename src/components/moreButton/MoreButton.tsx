/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import { MoreButtonProps } from '../../utils/types';
import { COLORS } from '../../utils/constants';

const linkCss = css`
  transition: color 0.3s ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    transition: all 0.3s ease-in-out;
    width: 20px;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  &[data-color='green'] {
    color: ${COLORS.green700};
    &:hover {
      color: ${COLORS.green800};
      svg {
        color: ${COLORS.green800};
      }
    }
  }

  &[data-color='indigo'] {
    color: ${COLORS.indigo700};
    &:hover {
      color: ${COLORS.indigo800};
      svg {
        color: ${COLORS.indigo800};
      }
    }
  }

  &[data-color='orange'] {
    color: ${COLORS.orange700};
    &:hover {
      color: ${COLORS.orange800};
      svg {
        color: ${COLORS.orange800};
      }
    }
  }

  &[data-color='cyan'] {
    color: ${COLORS.cyan700};
    &:hover {
      color: ${COLORS.cyan800};
      svg {
        color: ${COLORS.cyan800};
      }
    }
  }
`;

const disabledLinkCss = css`
  pointer-events: none;
  color: ${COLORS.disabledText} !important;
`;

/**
 * MoreButton component
 * @param {String} to - link to be redirected to
 * @param {String} text - text to be displayed
 * @param {ReactNode} icon - icon to be displayed
 * @param {String} color - color of the button ('green' | 'indigo' | 'orange' | 'cyan')
 * @param {Boolean} disabled - whether the button is disabled
 * @returns {JSX.Element}
 */
/** Primary UI component for the More Button component */
function MoreButton({
  to,
  text,
  icon,
  color = 'indigo',
  disabled = false,
}: MoreButtonProps) {
  return (
    <Link
      to={to}
      css={[linkCss, disabled && disabledLinkCss]}
      data-color={color}
    >
      {text} {icon}
    </Link>
  );
}

export default MoreButton;
