import React, { FunctionComponent } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

import { AppModalProps } from './types';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AppModal: FunctionComponent<AppModalProps> = ({
  children,
  close,
  open,
  title = null,
  description = null,
}) => (
  <Dialog
    open={open}
    TransitionComponent={Transition}
    onClose={close}
    aria-labelledby={title}
    aria-describedby={description}
  >
    {title && <DialogTitle>{title}</DialogTitle>}
    {children}
  </Dialog>
);

export default AppModal;
