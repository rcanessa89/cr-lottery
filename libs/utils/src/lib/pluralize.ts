export const pluralize = (str: string) => {
  const strTrimed = str.trim();
  const lastLetter = strTrimed[strTrimed.length - 1];

  if (lastLetter === 'y') {
    return strTrimed.substring(0, strTrimed.length - 1) + 'ies';
  }

  return strTrimed + 's';
};
