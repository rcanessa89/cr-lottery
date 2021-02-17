import { Event } from 'react-big-calendar';

import { Product } from '@cr-lottery/types';
import { DrawMonth } from '@cr-lottery/react-hooks-lib';
import { capitalize } from '@cr-lottery/utils/capitalize';

const getTite = (date: string, product: Product) => {
  const withTime = product === Product.Monazos || product === Product.Tiempos;

  if (!withTime) {
    return capitalize(`${product}`);
  }

  const hours = new Date(date).getHours();
  const hourTreshold = 12;
  const sufix = hours < hourTreshold ? 'Mañana' : 'Tarde';

  return capitalize(`${product} ${sufix}`);
};

const mapDraw: (dm: DrawMonth) => Event = ({ id, date, product }) => {
  const title = getTite(date, product);

  if (date) {
    date = date.slice(0, -1);
  }

  const start = new Date(date);
  const end = new Date(date);

  end.setHours(end.getHours() + 1);

  return {
    start,
    end,
    title,
    resource: {
      id,
      product,
    },
  };
};

export const mapDrawsToEvent = (drawSMonth: DrawMonth[]): Event[] =>
  drawSMonth.map(mapDraw);
