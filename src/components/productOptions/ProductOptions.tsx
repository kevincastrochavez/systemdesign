/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

import ProductOption from './ProductOption';
import { ProductOptionProps, ProductOptionsProps } from '../../utils/types';

const productOptionsContainerCss = css`
  display: flex;
  gap: 12px;

  &[data-space='md'] {
    gap: 16px;
  }

  &[data-space='lg'] {
    gap: 20px;
  }

  &[data-orientation='vertical'] {
    flex-direction: column;
  }
`;

/**
 * ProductOptions component
 * @param {String} optionName - group name of the options
 * @param {[Object]} optionsObj - array of options
 * @param {String} space - space between the options
 * @param {String} orientation - orientation of the options ('horizontal' | 'vertical')
 * @param {String} color - color of the options ('cyan' | 'indigo' | 'green' | 'orange')
 * @returns {JSX.Element}
 */
/** Primary UI component for the ProductOptions component */
function ProductOptions({
  optionName,
  optionsObj,
  space = 'md',
  orientation = 'horizontal',
  color = 'cyan',
}: ProductOptionsProps) {
  const [optionSelected, setOptionSelected] = useState<number | null>(null);

  const filteredOptions = optionsObj.filter(Boolean);

  return (
    <div
      css={productOptionsContainerCss}
      data-space={space}
      data-orientation={orientation}
      data-testid='product-options-container'
    >
      {filteredOptions?.map((option: ProductOptionProps, index: number) => (
        <ProductOption
          key={option.name}
          {...option}
          setOptionSelected={setOptionSelected}
          index={index}
          selected={optionSelected === index}
          color={color}
        />
      ))}
    </div>
  );
}

export default ProductOptions;
