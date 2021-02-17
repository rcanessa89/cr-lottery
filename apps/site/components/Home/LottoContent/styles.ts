import { styled } from '@material-ui/core';
import Card from '@material-ui/core/Card';

export const MCCard = styled(Card)((root) => ({
  backgroundColor: root.theme.palette.primary.main,
  color: '#fff',
  padding: root.theme.spacing(2),
  marginRight: root.theme.spacing(4),
  minWidth: 60,
  textAlign: 'center',
  '&:last-child': {
    marginRight: 0,
  },
}));
