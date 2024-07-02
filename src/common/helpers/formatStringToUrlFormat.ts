export const formatStringToUrlFormat = (string: string): string =>
  string
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
