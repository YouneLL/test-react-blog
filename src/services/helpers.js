export const limitString = (string, limit=20, end='...') => {
  return `${string.substr(0, limit)} ${end}`;
}
