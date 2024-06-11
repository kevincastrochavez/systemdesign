/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { useState } from 'react';

import { COLORS } from '../../utils/constants';
import { CartControlProps } from '../../utils/types';

const cartControlContainerCss = css`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${COLORS.neutral600};
  border: 1px solid ${COLORS.neutral200};
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 14px;

  &[data-radius='md'] {
    border-radius: 8px;
  }

  &[data-radius='lg'] {
    border-radius: 12px;
  }

  &[data-radius='xl'] {
    border-radius: 100px;
  }

  span {
    padding: 6px 20px;
    width: 16px;
    display: flex;
    justify-content: center;
  }

  svg {
    color: ${COLORS.neutral600};
    cursor: pointer;

    &[data-disabled='true'] {
      color: ${COLORS.disabledText};
    }
  }
`;

/**
 * CartControl component
 * @param {String} radius - radius of the chip ('sm' | 'md' | 'lg' | 'xl')
 * @param {Number} minValue - minimum value of the control
 * @param {Number} maxValue - maximum value of the control
 * @returns {JSX.Element}
 */
/** Primary UI component for the CartControl component */
function CartControl({
  radius = 'sm',
  minValue = 1,
  maxValue = 10,
}: CartControlProps) {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > minValue) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleIncrement = () => {
    if (count < maxValue) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div css={cartControlContainerCss} data-radius={radius}>
      <IconMinus
        onClick={handleDecrement}
        data-disabled={count <= minValue}
        data-testid='minus'
      />

      <span>{count}</span>

      <IconPlus
        onClick={handleIncrement}
        data-disabled={count >= maxValue}
        data-testid='plus'
      />
    </div>
  );
}

export default CartControl;
