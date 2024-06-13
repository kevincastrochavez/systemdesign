/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Gallery from './Gallery';
import { galleryProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  padding: 16px;
`;

function GalleryWrapper() {
  return (
    <div css={mainContainerCss}>
      <Gallery {...galleryProps} />
    </div>
  );
}

export default GalleryWrapper;
