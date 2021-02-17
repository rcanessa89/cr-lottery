import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    '& .rbc-calendar': {
      minHeight: 'calc(100vh - 100px)',
    },
  },
});
