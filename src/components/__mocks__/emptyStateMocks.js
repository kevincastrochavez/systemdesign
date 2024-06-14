import { IconMessage } from '@tabler/icons-react';

const emptyStateDefault = {
  title: 'No results found',
  description: 'Try adjusting your search terms.',
  iconObj: {
    color: 'cyan',
    size: 'md',
    shadow: true,
    shape: 'rounded',
    icon: <IconMessage />,
  },
};

const emptyStateNoIcon = {
  title: 'No results found',
  description: 'Try adjusting your search terms.',
};

export { emptyStateDefault, emptyStateNoIcon };
