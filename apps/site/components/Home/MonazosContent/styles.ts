import { styled } from '@material-ui/core';
import Card from '@material-ui/core/Card';

export const MCCard = styled(Card)((root) => ({
  backgroundColor: root.theme.palette.primary.main,
  color: '#fff',
  padding: root.theme.spacing(2),
  marginLeft: root.theme.spacing(2),
  marginRight: root.theme.spacing(2),
}));
