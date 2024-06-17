/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Icon from '../icon/Icon';
import { COLORS } from '../../utils/constants';
import { ListItemProps } from '../../utils/types';

const listItemContainerCss = css`
  display: flex;
  gap: 8px;
  align-items: center;
  font-family: 'Noto Sans', sans-serif;

  span {
    color: ${COLORS.secondaryText};
  }
`;

/**
 * ListItem component
 * @param {Object} iconObj - icon object
 * @param {String} text - text to be displayed
 * @returns {JSX.Element}
 */
/** Primary UI component for the ListItem component */
function ListItem({ iconObj, text }: ListItemProps) {
  return (
    <li css={listItemContainerCss}>
      <Icon {...iconObj} />
      <span>{text}</span>
    </li>
  );
}

export default ListItem;
