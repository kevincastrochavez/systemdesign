const productOptionDefault = {
  name: 'Small',
  outOfStock: false,
  setOptionSelected: () => {},
  index: 0,
  selected: false,
  color: 'cyan',
};

const productOptionSelected = {
  name: 'Small',
  outOfStock: false,
  setOptionSelected: () => {},
  index: 0,
  selected: true,
  color: 'cyan',
};

const productOptionDisabled = {
  name: 'Small',
  outOfStock: true,
  setOptionSelected: () => {},
  index: 0,
  selected: false,
  color: 'cyan',
};

const productOptionSelectedDisabled = {
  name: 'Small',
  outOfStock: true,
  setOptionSelected: () => {},
  index: 0,
  selected: true,
  color: 'cyan',
};

const productOptionsObj = [
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
];

const productOptionsObjOutOfStock = [
  {
    name: 'XS',
    outOfStock: false,
  },
  {
    name: 'S',
    outOfStock: true,
  },
  {
    name: 'M',
    outOfStock: false,
  },
  {
    name: 'L',
    outOfStock: true,
  },
  {
    name: 'XL',
    outOfStock: false,
  },
];

const productOptionsDefault = {
  optionName: 'Size',
  optionsObj: productOptionsObj,
  space: 'sm',
  orientation: 'horizontal',
};

const productOptionsOutOfStock = {
  optionName: 'Size',
  optionsObj: productOptionsObjOutOfStock,
  space: 'sm',
  orientation: 'horizontal',
};

const productOptionsVertical = {
  optionName: 'Size',
  optionsObj: productOptionsObj,
  space: 'sm',
  orientation: 'vertical',
};

export {
  productOptionDefault,
  productOptionSelected,
  productOptionDisabled,
  productOptionSelectedDisabled,
  productOptionsDefault,
  productOptionsOutOfStock,
  productOptionsVertical,
};
