import { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';

import { resultNumberFormat } from '@cr-lottery/utils/result-number-format';
import { TiemposContentProps } from './types';
import { MCCard } from './styles';

const TiemposContent: FunctionComponent<TiemposContentProps> = ({
  tiemposResult: { number, prize },
}) => (
  <DialogContent>
    <Box marginBottom={2} display="flex" justifyContent="space-around">
      <MCCard>
        <Typography>Numero</Typography>
        <Typography variant="h3" color="inherit" component="span">
          {resultNumberFormat(number)}
        </Typography>
      </MCCard>
      <MCCard>
        <Typography>Premio</Typography>
        <Typography variant="h3" color="inherit" component="span">
          {prize}
        </Typography>
      </MCCard>
    </Box>
  </DialogContent>
);

export default TiemposContent;
