import CartControl from '../cartControl/CartControl';
import ColorSwatches from '../colorSwatches/ColorSwatches';
import ProductOptions from '../productOptions/ProductOptions';

const productSectionDefault = {
  title: 'Available Sizes',
  productComponent: ProductOptions,
  productOptions: {
    optionName: 'Size',
    optionsObj: [
      {
        name: 'XS',
        outOfStock: false,
      },
      {
        name: 'S',
        outOfStock: false,
      },
      {
        name: 'M',
        outOfStock: false,
      },
      {
        name: 'L',
        outOfStock: false,
      },
      {
        name: 'XL',
        outOfStock: false,
      },
    ],
    space: 'sm',
    orientation: 'horizontal',
  },
};

const productSectionColors = {
  title: 'Available Colors',
  productComponent: ColorSwatches,
  productOptions: {
    colorsObj: [
      {
        color: 'cyan',
        outOfStock: false,
      },
      {
        color: 'indigo',
        outOfStock: false,
      },
      {
        color: 'green',
        outOfStock: false,
      },
      {
        color: 'orange',
        outOfStock: false,
      },
    ],
    space: 'sm',
    orientation: 'horizontal',
    shape: 'rounded',
  },
};

const productSectionQuantity = {
  title: 'Quantity',
  productComponent: CartControl,
  productOptions: {},
};

export { productSectionDefault, productSectionColors, productSectionQuantity };
