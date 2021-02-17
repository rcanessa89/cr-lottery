export const resultNumberFormat = (numb: number): string => {
  const numbStr = numb.toString();

  if (numbStr.length === 1) {
    return `0${numbStr}`;
  }

  return numbStr;
};
