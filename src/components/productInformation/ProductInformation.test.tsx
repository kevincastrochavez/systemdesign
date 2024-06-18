import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductInformation from './ProductInformation';

// Mock LazyLoadImage component to isolate tests for ProductInformation
jest.mock('react-lazy-load-image-component', () => ({
  LazyLoadImage: (props: any) => (
    <img data-testid='mock-lazy-load-image' {...props} />
  ),
}));

// Mock ListItem component to isolate tests for ProductInformation
jest.mock('../listItem/ListItem', () => (props: any) => (
  <div data-testid='mock-list-item' {...props}></div>
));

describe('ProductInformation Component', () => {
  const tabs = [
    {
      name: 'Overview',
      title: 'Product Overview',
      description: 'This is the overview of the product.',
      picture: 'https://via.placeholder.com/150',
      items: [
        {
          iconObj: {
            color: 'cyan',
            size: 'md',
            shadow: true,
            shape: 'rounded',
            icon: <svg data-testid='svg-icon'></svg>,
          },
          text: 'High Quality',
        },
        {
          iconObj: {
            color: 'indigo',
            size: 'md',
            shadow: true,
            shape: 'rounded',
            icon: <svg data-testid='svg-icon'></svg>,
          },
          text: 'Durable',
        },
      ],
    },
    {
      name: 'Specifications',
      title: 'Product Specifications',
      description: 'These are the specifications of the product.',
      picture: 'https://via.placeholder.com/150',
      items: [
        {
          iconObj: {
            color: 'green',
            size: 'md',
            shadow: true,
            shape: 'rounded',
            icon: <svg data-testid='svg-icon'></svg>,
          },
          text: 'Eco Friendly',
        },
        {
          iconObj: {
            color: 'orange',
            size: 'md',
            shadow: true,
            shape: 'rounded',
            icon: <svg data-testid='svg-icon'></svg>,
          },
          text: 'Energy Efficient',
        },
      ],
    },
  ];

  test('renders without crashing', () => {
    render(<ProductInformation tabs={tabs} />);
    const title = screen.getByText('Product Overview');

    expect(title).toBeInTheDocument();
  });

  test('displays tab headers correctly', () => {
    render(<ProductInformation tabs={tabs} />);
    const tabHeaders = screen.getAllByTestId('tab-header');

    expect(tabHeaders).toHaveLength(tabs.length);
    tabs.forEach((tab, index) => {
      expect(tabHeaders[index]).toHaveTextContent(tab.name);
    });
  });

  test('changes content when a tab is clicked', () => {
    render(<ProductInformation tabs={tabs} />);
    const specificationsTab = screen.getByText('Specifications');
    fireEvent.click(specificationsTab);

    const currentTab = screen.getByText('Specifications');
    const previousTab = screen.queryByText('Product Overview');

    expect(currentTab).toBeInTheDocument();
    expect(previousTab).not.toBeInTheDocument();
  });

  test('renders LazyLoadImage with correct props', () => {
    render(<ProductInformation tabs={tabs} />);
    const lazyLoadImage = screen.getByTestId('mock-lazy-load-image');

    expect(lazyLoadImage).toBeInTheDocument();
    expect(lazyLoadImage).toHaveAttribute(
      'src',
      'https://via.placeholder.com/150'
    );
    expect(lazyLoadImage).toHaveAttribute('alt', 'Overview');
  });

  test('renders ListItem components correctly', () => {
    render(<ProductInformation tabs={tabs} />);
    const listItems = screen.getAllByTestId('mock-list-item');

    expect(listItems).toHaveLength(tabs[0].items.length);
  });
});
