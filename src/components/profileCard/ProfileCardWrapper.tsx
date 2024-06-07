/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import ProfileCard from './ProfileCard';
import { profileCardProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
`;

function ProfileCardWrapper() {
  return (
    <div css={mainContainerCss}>
      <ProfileCard {...profileCardProps} />
    </div>
  );
}

export default ProfileCardWrapper;
