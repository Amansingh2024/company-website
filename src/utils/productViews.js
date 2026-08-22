// Every product has one clear primary catalogue image.
export function getProductViews(product) {
  const source = product?.images?.[0];
  if (!source) return [];

  return [{ label: 'Product Image', url: source }];
}
