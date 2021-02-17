import format from 'date-fns/format';

const esLocale = require('date-fns/locale/es');

export const esFormat = (date: Date, formatStr: string) =>
  format(date, formatStr, { locale: esLocale });
