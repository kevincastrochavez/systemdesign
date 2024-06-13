/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Accordion from './Accordion';
import { accordionProps } from '../../utils/componentObjects';

const mainContainerCss = css`
  display: grid;
  place-items: center;
  margin-top: 200px;
  padding: 16px;
`;

function AccordionWrapper() {
  return (
    <div css={mainContainerCss}>
      <Accordion {...accordionProps} />
      <Accordion {...accordionProps} />
    </div>
  );
}

export default AccordionWrapper;
