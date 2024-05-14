/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import BlogCard from './BlogCard';
import { blogCardProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 120px;
`;

function BlogCardWrapper() {
  return (
    <div css={mainContainerCss}>
      <BlogCard {...blogCardProps} />
    </div>
  );
}

export default BlogCardWrapper;
