const colorSwatchDefault = {
  color: 'cyan',
  outOfStock: false,
  setOptionSelected: () => {},
  index: 0,
  selected: false,
};

const colorSwatchSquared = {
  color: 'cyan',
  outOfStock: false,
  setOptionSelected: () => {},
  index: 0,
  selected: false,
  shape: 'squared',
};

const colorSwatchSelected = {
  color: 'cyan',
  outOfStock: false,
  setOptionSelected: () => {},
  index: 0,
  selected: true,
};

const colorSwatchDisabled = {
  color: 'cyan',
  outOfStock: true,
  setOptionSelected: () => {},
  index: 0,
  selected: false,
};

const colorSwatchSelectedDisabled = {
  color: 'cyan',
  outOfStock: true,
  setOptionSelected: () => {},
  index: 0,
  selected: true,
};

const colorSwatchesDefault = {
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
  shape: 'rounded',
  orientation: 'horizontal',
};

const colorSwatchesOutOfStock = {
  colorsObj: [
    {
      color: 'cyan',
      outOfStock: false,
    },
    {
      color: 'indigo',
      outOfStock: true,
    },
    {
      color: 'green',
      outOfStock: false,
    },
    {
      color: 'orange',
      outOfStock: true,
    },
  ],
  space: 'sm',
  shape: 'rounded',
  orientation: 'horizontal',
};

const colorSwatchesVertical = {
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
  shape: 'rounded',
  orientation: 'vertical',
};

export {
  colorSwatchDefault,
  colorSwatchSquared,
  colorSwatchSelected,
  colorSwatchDisabled,
  colorSwatchSelectedDisabled,
  colorSwatchesDefault,
  colorSwatchesOutOfStock,
  colorSwatchesVertical,
};
