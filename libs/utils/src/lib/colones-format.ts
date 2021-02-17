export const colonesFormat = (amount: number, divider = ','): string => {
  const numberStr = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, divider);

  return `₡ ${numberStr}`;
};
