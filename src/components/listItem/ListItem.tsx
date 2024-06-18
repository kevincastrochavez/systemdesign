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

  &[data-space='md'] {
    gap: 12px;
  }

  &[data-space='lg'] {
    gap: 16px;
  }
`;

/**
 * ListItem component
 * @param {Object} iconObj - icon object
 * @param {String} text - text to be displayed
 * @param {String} space - space between icon and text ('sm' | 'md' | 'lg')
 * @returns {JSX.Element}
 */
/** Primary UI component for the ListItem component */
function ListItem({ iconObj, text, space = 'sm' }: ListItemProps) {
  return (
    <li css={listItemContainerCss} data-space={space}>
      <Icon {...iconObj} />
      <span>{text}</span>
    </li>
  );
}

export default ListItem;
