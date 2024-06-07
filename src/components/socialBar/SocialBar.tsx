/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { SocialBarProps } from '../../utils/types';
import ActionIcon from '../actionIcon/ActionIcon';

const socialBarContainerCss = css`
  display: flex;
  justify-content: center;

  // Width
  &[data-width='full'] {
    width: 100%;
  }

  // Separation
  &[data-separation='sm'] {
    gap: 4px;
  }

  &[data-separation='md'] {
    gap: 8px;
  }

  &[data-separation='lg'] {
    gap: 12px;
  }

  &[data-separation='xl'] {
    gap: 16px;
  }
`;

const socialBarIconContainerCss = css`
  // Size
  &[data-size='sm'] {
    padding: 4px;
  }

  &[data-size='md'] {
    padding: 8px;
  }

  &[data-size='lg'] {
    padding: 12px;
  }

  &[data-size='xl'] {
    padding: 16px;
  }
`;

/**
 * SocialBar component
 * @param {[Object]} actionIcons - action icons to be displayed
 * @param {String} color - color of the social bar ('green' | 'indigo' | 'orange' | 'cyan')
 * @param {String} size - size of the social bar ('sm' | 'md' | 'lg' | 'xl')
 * @param {String} width - width of the social bar ('fit-content' | 'full')
 * @param {String} separation - separation among the icons
 * @returns {JSX.Element}
 */
function SocialBar({
  actionIcons,
  color = 'cyan',
  size = 'md',
  width = 'fit-content',
  separation = 'md',
}: SocialBarProps) {
  return (
    <div
      css={socialBarContainerCss}
      data-width={width}
      data-separation={separation}
      data-testid='social-bar'
    >
      {actionIcons?.map((actionIcon, index) => (
        <div data-size={size} css={socialBarIconContainerCss}>
          <ActionIcon {...actionIcon} key={index} color={color} size={size} />
        </div>
      ))}
    </div>
  );
}

export default SocialBar;
