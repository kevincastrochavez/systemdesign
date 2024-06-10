/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { IconEye, IconEyeClosed } from '@tabler/icons-react';

import { COLORS } from '../../utils/constants';
import { InputProps } from '../../utils/types';

const inputContainerCss = css`
  font-family: 'Noto Sans', sans-serif;
  display: grid;
  gap: 6px;
  min-width: 280px;
  width: 100%;
  max-width: 340px;

  label {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
  }

  span {
    display: flex;
    align-items: center;
  }

  & > p {
    font-size: 14px;
    line-height: 20px;
    color: ${COLORS.neutral500};
    margin: 0;
  }
`;

const inputWrapperCss = css`
  background: ${COLORS.neutral50};
  border: 1px solid ${COLORS.neutral200};
  padding: 10px 12px 10px 14px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;

  &[data-is-focused='true'] {
    border: 1px solid ${COLORS.inputFocus};
    box-shadow: 0 0 0 2px rgba(68, 76, 231, 0.5) ${COLORS.inputFocus};
    box-shadow: rgba(68, 76, 231, 0.12) 0px 0px 0px 4px;
  }

  &[data-is-invalid='true'][data-is-focused='true'] {
    border: 1px solid ${COLORS.red600};
    box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.5) ${COLORS.red600};
    box-shadow: rgba(220, 38, 38, 0.12) 0px 0px 0px 4px;
  }

  input {
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
    line-height: 20px;
    flex: 1;

    &::placeholder {
      color: ${COLORS.neutral500};
    }

    &:disabled {
      cursor: not-allowed;

      &::placeholder {
        color: ${COLORS.disabledText};
      }
    }
  }

  & svg {
    width: 20px;
    height: 20px;
    color: ${COLORS.disabledText};
  }
`;

const inputErrorMsgCss = css`
  color: ${COLORS.red600} !important;
`;

/**
 * Input component
 * @param {String} labelText - text to be displayed
 * @param {ReactNode} leftIcon - icon to be displayed
 * @param {String} placeholder - placeholder of the input
 * @param {String} type - type of the input ('text' | 'password', 'email')
 * @param {String} pattern - pattern of the input
 * @param {String} hint - hint of the input
 * @param {String} errorMessage - error message of the input
 * @param {Boolean} disabled - whether the input is disabled
 * @returns {JSX.Element}
 */
/** Primary UI component for the Input component */
function Input({
  labelText,
  leftIcon,
  placeholder,
  type = 'text',
  pattern = '.*',
  hint,
  errorMessage = 'This is an error message',
  disabled = false,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const regex = new RegExp(pattern);
  const isValid = regex.test(inputValue);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);

    if (!isDirty) {
      setIsDirty(true);
    }
  }

  return (
    <div css={inputContainerCss}>
      <label htmlFor='input'>{labelText}</label>

      <div
        css={inputWrapperCss}
        data-is-focused={isFocused}
        data-is-invalid={!isValid && isDirty}
      >
        {leftIcon && <span>{leftIcon}</span>}
        <input
          id='input'
          aria-describedby='hint'
          required
          type={type === 'password' && showPassword ? 'text' : type}
          placeholder={
            type === 'password' && !showPassword ? '●●●●●●●●' : placeholder
          }
          disabled={disabled}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {type === 'password' && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            data-testid='toggleEye'
          >
            {showPassword ? <IconEyeClosed /> : <IconEye />}
          </span>
        )}
      </div>

      {!isValid && isDirty ? (
        <p css={inputErrorMsgCss}>{errorMessage}</p>
      ) : (
        <p id='hint'>{hint}</p>
      )}
    </div>
  );
}

export default Input;
