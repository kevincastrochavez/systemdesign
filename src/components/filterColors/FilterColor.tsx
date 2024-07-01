/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { COLORS } from '../../utils/constants';
import { FilterColorProps } from '../../utils/types';

const filterColorContainerCss = css`
  cursor: pointer;
  padding: 4px;
`;

const filterColorInnerContainerCss = css`
  width: 16px;
  height: 16px;
  border-radius: 100px;
  background-color: ${COLORS.grayBackground};
  outline: 2px solid transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    outline: 2px solid ${COLORS.indigo200};
  }

  /* Colors */
  &[data-color='indigo'] {
    background-color: ${COLORS.indigo700};
  }

  &[data-color='green'] {
    background-color: ${COLORS.green700};
  }

  &[data-color='orange'] {
    background-color: ${COLORS.orange700};
  }

  &[data-color='cyan'] {
    background-color: ${COLORS.cyan700};
  }

  &[data-selected='true'] {
    outline: 2px solid ${COLORS.indigo200};
  }
`;

/**
 * FilterColor component
 * @param {String} color - color to be displayed
 * @param {Function} setColorSelected - function to be called when color is selected
 * @param {String} colorSelected - color that is currently selected
 */
/** Primary UI component for the FilterColor component */
function FilterColor({
  color,
  setColorSelected,
  colorSelected,
}: FilterColorProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const colorParams = searchParams.get('color');

  // checking when component mounts if color is in params
  useEffect(() => {
    if (colorParams) {
      setColorSelected(colorParams);
    }
  }, [colorParams, setColorSelected]);

  /**
   * Handles selecting a color
   * @param {String} color - color to be selected
   * @returns {void}
   */
  const handleSelectColor = (color: string) => {
    // If color is already selected, unselect it and remove it from params
    if (colorSelected === color) {
      setColorSelected('');
      searchParams.delete('color');
      setSearchParams(searchParams);
      return;
    }

    setColorSelected(color);
    searchParams.set('color', color);
    setSearchParams(searchParams);
  };

  return (
    <div
      css={filterColorContainerCss}
      onClick={() => handleSelectColor(color)}
      data-testid={color}
    >
      <div
        data-color={color}
        css={filterColorInnerContainerCss}
        data-selected={colorSelected === color}
        data-testid={`${color}-circle`}
      ></div>
    </div>
  );
}

export default FilterColor;
