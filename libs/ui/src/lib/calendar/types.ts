import { CalendarProps, DateLocalizer, Event } from 'react-big-calendar';

export interface LocalizerConfig {
  format?: Function;
  parse?: Function;
  startOfWeek?: Function;
  getDay?: Function;
  locales?: Object;
}

export interface CalendarPros extends Partial<CalendarProps> {
  localizer?: DateLocalizer;
  events: Event[];
}
