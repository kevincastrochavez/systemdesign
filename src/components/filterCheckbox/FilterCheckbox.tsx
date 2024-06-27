/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { COLORS } from '../../utils/constants';

const filterCheckboxContainerCss = css`
  font-family: 'Noto Sans', sans-serif;
  display: flex;
  gap: 16px;
  align-items: center;

  input[type='checkbox'] {
    width: 16px;
    height: 16px;
    border: 1px solid ${COLORS.grayBorder};
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin: 0;
  }

  label {
    cursor: pointer;
    color: ${COLORS.secondaryText};
  }
`;

/**
 * FilterCheckbox component
 * @param {String} labelText - text to be displayed
 * @param {String} filterQuery - query to be filtered
 * @param {String} categoryToFilter - category to be filtered
 */
/** Primary UI component for the FilterCheckbox component */
function FilterCheckbox({ labelText, filterQuery, categoryToFilter }: any) {
  const [checked, setChecked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const paramsArray = searchParams.getAll(categoryToFilter);
  const filterQueryIsInParams = paramsArray.includes(filterQuery);

  // checking checkbox when component mounts if filterQuery is in params
  useEffect(() => {
    if (filterQueryIsInParams) {
      setChecked(true);
    }
  }, [filterQueryIsInParams]);

  const handleCheckboxChange = () => {
    if (checked === false) {
      setChecked(true);
      searchParams.append(categoryToFilter, filterQuery);
      setSearchParams(searchParams);
    } else {
      setChecked(false);
      searchParams.delete(categoryToFilter, filterQuery); // remove filterQuery from params and not the categoryToFilter, in case there are multiple
      setSearchParams(searchParams);
    }
  };

  return (
    <div css={filterCheckboxContainerCss}>
      <input
        onChange={handleCheckboxChange}
        checked={checked}
        type='checkbox'
        id='checkbox'
      />
      <label htmlFor='checkbox'>{labelText}</label>
    </div>
  );
}

export default FilterCheckbox;
