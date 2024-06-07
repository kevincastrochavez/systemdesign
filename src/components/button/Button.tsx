/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ButtonProps } from '../../utils/types';
import { COLORS } from '../../utils/constants';

const buttonCss = css`
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;

  & svg {
    width: 20px;
    height: 20px;
  }

  &[data-icon-position='left'] {
    flex-direction: row-reverse;
  }

  &[data-variant='default'] {
    background: white !important;
    border: 1px solid ${COLORS.grayBorder} !important;
    color: black !important;

    &:hover {
      background: ${COLORS.grayHover} !important;
    }
  }

  &[data-variant='filled'] {
    color: white !important;
    border: none !important;
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

  &[data-size='md'] {
    font-size: 16px;
    line-height: 24px;
    padding: 14px 20px;
  }

  &[data-size='lg'] {
    font-size: 18px;
    line-height: 28px;
    padding: 16px 24px;
  }

  &[data-size='xl'] {
    font-size: 20px;
    line-height: 30px;
    padding: 18px 28px;
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

  &[data-width='fit-content'] {
    width: fit-content;
  }

  &[data-width='full'] {
    width: 100%;
    max-width: 320px;
  }

  &[disabled] {
    pointer-events: none;
    color: ${COLORS.disabledText} !important;
    background: ${COLORS.grayBackgroundDisabled} !important;
    border: 1px solid transparent !important;
  }
`;

/**
 * Button component
 * @param {Function} onclick - function to be called on click
 * @param {String} text - text to be displayed
 * @param {String} variant - variant of the button ('default' | 'filled' | 'light' | 'outline')
 * @param {String} color - color of the button ('green' | 'indigo' | 'orange' | 'cyan')
 * @param {String} size - size of the button ('sm' | 'md' | 'lg' | 'xl')
 * @param {String} radius - radius of the button ('sm' | 'md' | 'lg' | 'full')
 * @param {String} width - width of the button ('fit-content' | 'full')
 * @param {Boolean} disabled - whether the button is disabled
 * @param {String} iconPosition - position of the icon ('left' | 'right')
 * @param {ReactNode} icon - icon to be displayed
 * @returns {JSX.Element}
 */
/** Primary UI component for the Button component */
function Button({
  onclick,
  text,
  variant = 'default',
  color = 'indigo',
  size = 'sm',
  radius = 'sm',
  width = 'full',
  disabled = false,
  iconPosition = 'right',
  icon,
}: ButtonProps) {
  return (
    <button
      onClick={onclick}
      data-icon-position={iconPosition}
      data-variant={variant}
      data-color={color}
      data-size={size}
      data-width={width}
      data-radius={radius}
      css={buttonCss}
      disabled={disabled}
    >
      {text} {icon && icon}
    </button>
  );
}

export default Button;
