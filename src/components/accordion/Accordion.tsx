/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconMinus, IconPlus } from '@tabler/icons-react';

import { COLORS } from '../../utils/constants';
import { AccordionProps } from '../../utils/types';

const accordionContainerCss = css`
  font-family: 'Noto Sans', sans-serif;
  width: 100% !important;
  min-width: 320px;
  max-width: 768px;
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 48px;
  row-gap: 8px;

  h3 {
    margin: 0;
    font-size: 18px;
    line-height: 28px;
    font-weight: 500;
    cursor: pointer;
  }

  ul {
    padding-left: 24px;
    margin-bottom: 24px;
  }

  & div:first-of-type {
    cursor: pointer;
    border: 2px solid ${COLORS.neutral400};
    border-radius: 100px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const accordionParagraphCss = css`
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.secondaryText};
  list-style: disc;
  margin: 0;
`;

const accordionDividerCss = css`
  width: 100%;
  height: 1px;
  background-color: ${COLORS.divider};
  grid-column: 1 / -1;
  margin-bottom: 12px;
`;

function Accordion({ title, content }: AccordionProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.section
      initial='false'
      css={accordionContainerCss}
      onClick={() => setExpanded(!expanded)}
    >
      <motion.h3>{title}</motion.h3>
      <motion.div>
        {expanded ? (
          <IconMinus
            data-testid='minus-icon'
            color={COLORS.neutral400}
            stroke={3}
            width={16}
            height={16}
          />
        ) : (
          <IconPlus
            data-testid='plus-icon'
            color={COLORS.neutral400}
            stroke={3}
            width={16}
            height={16}
          />
        )}
      </motion.div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.ul
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {content?.map((paragraph, index) => (
              <li key={index} css={accordionParagraphCss}>
                {paragraph}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <div css={accordionDividerCss}></div>
    </motion.section>
  );
}

export default Accordion;
