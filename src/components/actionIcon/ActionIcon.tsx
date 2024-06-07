/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ActionIconProps } from '../../utils/types';
import { COLORS } from '../../utils/constants';

const actionIconContainerCss = css`
  display: grid;
  place-items: center;
  cursor: pointer;
  border: none;
  padding: 0;

  /* Variants */
  &[data-variant='default'] {
    background: white !important;
    border: 1px solid ${COLORS.grayBorder} !important;

    & svg {
      color: black !important;
    }
  }

  &[data-variant='filled'] {
    & svg {
      color: white !important;
    }
  }

  &[data-variant='light'] {
    border: none !important;

    &[data-color='indigo'] {
      background: ${COLORS.indigo50} !important;
    }

    &[data-color='green'] {
      background: ${COLORS.green50} !important;
    }

    &[data-color='orange'] {
      background: ${COLORS.orange50} !important;
    }

    &[data-color='cyan'] {
      background: ${COLORS.cyan50} !important;
    }
  }

  &[data-variant='outline'] {
    background: transparent !important;

    &[data-color='indigo'] {
      border: 1px solid ${COLORS.indigo700} !important;

      &:hover {
        background: ${COLORS.indigo50} !important;
      }
    }

    &[data-color='green'] {
      border: 1px solid ${COLORS.green700} !important;

      &:hover {
        background: ${COLORS.green50} !important;
      }
    }

    &[data-color='orange'] {
      border: 1px solid ${COLORS.orange700} !important;

      &:hover {
        background: ${COLORS.orange50} !important;
      }
    }

    &[data-color='cyan'] {
      border: 1px solid ${COLORS.cyan700} !important;

      &:hover {
        background: ${COLORS.cyan50} !important;
      }
    }
  }

  /* Sizes */
  &[data-size='sm'] {
    width: 20px;
    height: 20px;

    & svg {
      width: 14px;
      height: 14px;
    }
  }

  &[data-size='md'] {
    width: 26px;
    height: 26px;

    & svg {
      width: 18px;
      height: 18px;
    }
  }

  &[data-size='lg'] {
    width: 32px;
    height: 32px;

    & svg {
      width: 22px;
      height: 22px;
    }
  }

  &[data-size='xl'] {
    width: 42px;
    height: 42px;

    & svg {
      width: 30px;
      height: 30px;
    }
  }

  /* Radius */
  &[data-radius='sm'] {
    border-radius: 4px;
  }

  &[data-radius='md'] {
    border-radius: 8px;
  }

  &[data-radius='lg'] {
    border-radius: 12px;
  }

  &[data-radius='full'] {
    border-radius: 100px;
  }

  /* Colors */
  &[data-color='indigo'] {
    color: ${COLORS.indigo700};
    background: ${COLORS.indigo700};
    border-color: ${COLORS.indigo700};
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${COLORS.indigo800};
      background: ${COLORS.indigo800};
      border-color: ${COLORS.indigo800};
    }
  }

  &[data-color='green'] {
    color: ${COLORS.green700};
    background: ${COLORS.green700};
    border-color: ${COLORS.green700};
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${COLORS.green800};
      background: ${COLORS.green800};
      border-color: ${COLORS.green800};
    }
  }

  &[data-color='orange'] {
    color: ${COLORS.orange700};
    background: ${COLORS.orange700};
    border-color: ${COLORS.orange700};
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${COLORS.orange800};
      background: ${COLORS.orange800};
      border-color: ${COLORS.orange800};
    }
  }

  &[data-color='cyan'] {
    color: ${COLORS.cyan700};
    background: ${COLORS.cyan700};
    border-color: ${COLORS.cyan700};
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${COLORS.cyan800};
      background: ${COLORS.cyan800};
      border-color: ${COLORS.cyan800};
    }
  }

  &[disabled] {
    pointer-events: none;
    color: ${COLORS.disabledText} !important;
    background: ${COLORS.grayBackgroundDisabled} !important;
    border: 1px solid transparent !important;
  }
`;

/**
 * ActionIcon component
 * @param {ReactNode} icon - Icon to be displayed
 * @param {String} color - Color of the icon
 * @param {String} size - Size of the icon
 * @param {String} variant - Variant of the icon
 * @param {Boolean} disabled - Whether the icon is disabled
 * @param {String} radius - Radius of the icon
 * @returns {JSX.Element}
 */
/** Primary UI component for the ActionIcon component */
function ActionIcon({
  icon,
  color = 'indigo',
  size = 'md',
  variant = 'default',
  disabled = false,
  radius = 'md',
  onClick,
}: ActionIconProps) {
  return (
    <button
      css={actionIconContainerCss}
      data-color={color}
      data-size={size}
      data-variant={variant}
      data-radius={radius}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default ActionIcon;
