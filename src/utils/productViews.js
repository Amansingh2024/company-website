const VIEW_DEFINITIONS = [
  { label: 'Front View', crop: 'center' },
  { label: 'Side View', crop: 'left' },
  { label: 'Back View', crop: 'right' },
];

function createCroppedUrl(source, crop) {
  if (crop === 'center' || !source.includes('images.unsplash.com')) return source;

  const url = new URL(source);
  url.searchParams.set('fit', 'crop');
  url.searchParams.set('crop', crop);
  return url.toString();
}

// Every gallery is derived from the product's primary photo only.
export function getProductViews(product) {
  const source = product?.images?.[0];
  if (!source) return [];

  return VIEW_DEFINITIONS.map(({ label, crop }) => ({
    label,
    url: createCroppedUrl(source, crop),
  }));
}
