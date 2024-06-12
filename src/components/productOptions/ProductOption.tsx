/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { COLORS } from '../../utils/constants';
import { ProductOptionProps } from '../../utils/types';

const productOptionContainerCss = css`
  font-family: 'Noto Sans', sans-serif;
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid ${COLORS.neutral200};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;

  &[data-selected='true'] {
    &[data-color='cyan'] {
      border: 1px solid ${COLORS.cyan700};
    }

    &[data-color='indigo'] {
      border: 1px solid ${COLORS.indigo700};
    }

    &[data-color='green'] {
      border: 1px solid ${COLORS.green700};
    }

    &[data-color='orange'] {
      border: 1px solid ${COLORS.orange700};
    }
  }

  &[data-disabled='true'] {
    color: ${COLORS.disabledText};
    background-color: ${COLORS.neutral100};
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${COLORS.neutral50};
  }
`;

/**
 * ProductOption component
 * @param {String} name - text to be displayed
 * @param {Boolean} outOfStock - whether the option is out of stock
 * @param {Function} setOptionSelected - function to be called when the option is selected
 * @param {Number} index - index of the option
 * @param {Boolean} selected - whether the option is selected
 * @param {String} color - color of the option ('cyan' | 'indigo' | 'green' | 'orange')
 * @returns {JSX.Element}
 */
/** Primary UI component for the ProductOption component */
function ProductOption({
  name,
  outOfStock = false,
  setOptionSelected,
  index,
  selected,
  color,
}: ProductOptionProps) {
  return (
    <div
      css={productOptionContainerCss}
      data-disabled={outOfStock}
      data-selected={selected}
      data-color={color}
      data-testid='product-option'
      onClick={() => setOptionSelected(index)}
    >
      {name}
    </div>
  );
}

export default ProductOption;
