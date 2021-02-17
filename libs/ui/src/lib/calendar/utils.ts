import { dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';

import { LocalizerConfig } from './types';

const LOCALES = {
  'en-US': require('date-fns/locale/en-US'),
};
const DEFAULT_CONFIG = {
  format,
  parse,
  startOfWeek,
  getDay,
  locales: LOCALES,
};

export const getLocalizar = (config: LocalizerConfig = {}) =>
  dateFnsLocalizer({
    ...DEFAULT_CONFIG,
    ...config,
  });
