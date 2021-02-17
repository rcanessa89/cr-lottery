import React, { FunctionComponent } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './styles';
import { BackdropLoadingProps } from './types';

const BackdropLoading: FunctionComponent<BackdropLoadingProps> = ({
  loading,
}) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackdropLoading;
