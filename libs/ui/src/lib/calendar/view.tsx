import React, { FunctionComponent } from 'react';
import { Calendar } from 'react-big-calendar';

import { CalendarPros } from './types';
import { getLocalizar } from './utils';
import { useStyles } from './styles';

const defaulLocalizer = getLocalizar();

const AppCalendar: FunctionComponent<CalendarPros> = ({
  localizer = defaulLocalizer,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Calendar
        localizer={localizer}
        popup={true}
        views={{ month: true }}
        defaultView="month"
        {...props}
      />
    </div>
  );
};

export default AppCalendar;
