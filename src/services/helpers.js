export const limitString = (string, limit=20, end='...') => {
  return string.length > limit ? `${string.substr(0, limit)} ${end}` : string;
}
