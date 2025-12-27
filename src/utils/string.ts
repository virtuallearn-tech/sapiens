export const normalizeString = (value: string): string => {
  return value
    .normalize('NFD')                 // separa acentos
    .replace(/[\u0300-\u036f]/g, '')  // remove acentos
    .toLowerCase()
}

export const includesNormalized = (
  source: string,
  search: string
): boolean => {
  return normalizeString(source).includes(normalizeString(search))
}