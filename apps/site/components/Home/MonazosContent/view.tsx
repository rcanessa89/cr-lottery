import { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';

import { MonazosContentProps } from './types';
import { MCCard } from './styles';

const MonazosContent: FunctionComponent<MonazosContentProps> = ({
  monazosResult: { numbers },
}) => {
  return (
    <DialogContent>
      <Box marginBottom={3} clone>
        <Typography align="center" variant="h5" component="h2">
          Numeros
        </Typography>
      </Box>
      <Box marginBottom={4} display="flex" justifyContent="space-around">
        {numbers.map((n, i) => (
          <MCCard key={`${n}-${i}`}>
            <Typography variant="h3" color="inherit" component="span">
              {n}
            </Typography>
          </MCCard>
        ))}
      </Box>
    </DialogContent>
  );
};

export default MonazosContent;
