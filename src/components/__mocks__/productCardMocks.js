const productCardDefault = {
  imgInfo: {
    src: 'https://picsum.photos/200/300',
    alt: 'product image',
  },
  name: 'Urban Drift Bucket Hat',
  price: {
    originalPrice: 95,
    discountedPrice: 76,
  },
  colorSwatchesProps: {
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
  },
};

export { productCardDefault };
