import type { Meta } from '@storybook/react';

import Accordion from './Accordion';
import { AccordionProps } from '../../utils/types';
import { accordionDefault } from '../__mocks__/accordionMocks';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = (args: AccordionProps) => <Accordion {...args} />;
Basic.args = {
  ...accordionDefault,
};
