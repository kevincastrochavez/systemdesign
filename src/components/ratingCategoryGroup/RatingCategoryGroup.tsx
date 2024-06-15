/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { RatingCategoryGroupProps } from '../../utils/types';
import RatingCategory from '../ratingCategory/RatingCategory';

const ratingCategoryGroupContainerCss = css`
  width: 100%;
  max-width: 768px;
  margin: 16px 0;
  display: grid;
  gap: 16px;
`;

/**
 * RatingCategoryGroup component
 * @param {[Object]} ratingCategories - rating categories
 * @returns {JSX.Element}
 */
/** Primary UI component for the RatingCategoryGroup component */
function RatingCategoryGroup({ ratingCategories }: RatingCategoryGroupProps) {
  return (
    <div css={ratingCategoryGroupContainerCss}>
      {ratingCategories.map((ratingCategory) => (
        <RatingCategory
          key={ratingCategory.name}
          name={ratingCategory.name}
          progressBar={ratingCategory.progressBar}
        />
      ))}
    </div>
  );
}

export default RatingCategoryGroup;
