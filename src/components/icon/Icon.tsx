/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { IconProps } from '../../utils/types';
import { COLORS } from '../../utils/constants';

const iconContainerCss = css`
  display: grid;
  place-items: center;
  padding: 8px;
  border-radius: 100px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  svg {
    width: 100%;
    height: 100%;
    color: ${COLORS.cyan700};
  }

  /* Colors */
  &[data-color='indigo'] {
    svg {
      color: ${COLORS.indigo700};
    }
  }

  &[data-color='green'] {
    svg {
      color: ${COLORS.green700};
    }
  }

  &[data-color='orange'] {
    svg {
      color: ${COLORS.orange700};
    }
  }

  /* Sizes */
  &[data-size='md'] {
    padding: 12px;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  &[data-size='lg'] {
    padding: 16px;

    svg {
      width: 40px;
      height: 40px;
    }
  }

  /* Shadows */
  &[data-shadow='false'] {
    box-shadow: none;
  }

  /* Shapes */
  &[data-shape='squared'] {
    border-radius: 8px;
  }
`;

/**
 * Icon component
 * @param {String} color - color of the icon ('green' | 'indigo' | 'orange' | 'cyan')
 * @param {String} size - size of the icon ('sm' | 'md' | 'lg')
 * @param {Boolean} shadow - whether the icon should have a shadow
 * @param {String} shape - shape of the icon ('squared' | 'rounded')
 * @param {ReactNode} icon - icon to be displayed
 * @returns {JSX.Element}
 */
/** Primary UI component for the Icon component */
function Icon({
  color = 'cyan',
  size = 'sm',
  shadow = true,
  shape = 'rounded',
  icon,
}: IconProps) {
  return (
    <div
      css={iconContainerCss}
      data-color={color}
      data-size={size}
      data-shadow={shadow}
      data-shape={shape}
      data-testid='icon-container'
    >
      {icon}
    </div>
  );
}

export default Icon;
