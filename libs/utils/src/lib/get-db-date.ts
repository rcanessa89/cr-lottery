import format from 'date-fns/format';

export const getDbDate = (date: Date | string, dateFormatFlag = true) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const dateTimeFormat = 'yyyy-MM-dd kk:mm:ss.SSS';
  const dateFormat = 'yyyy-MM-dd';

  if (dateFormatFlag) {
    return format(dateObj, dateFormat);
  }

  return format(dateObj, dateTimeFormat);
};
