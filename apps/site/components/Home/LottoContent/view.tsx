import { FunctionComponent, Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';

import { LottoContentProps } from './types';
import { mapData } from './utils';
import { MCCard } from './styles';

const LottoContent: FunctionComponent<LottoContentProps> = ({
  lottoResult,
}) => {
  const data = mapData(lottoResult);

  return (
    <DialogContent>
      {data.map((d, i) => (
        <Fragment key={d.title}>
          <Box marginBottom={1} clone>
            <Typography variant="h5" component="h2">
              {d.title}
            </Typography>
          </Box>
          <Box marginBottom={1} display="flex" justifyContent="space-between">
            {d.numbers.map((n, i) => (
              <MCCard key={`${n}-${i}`}>
                <Typography variant="h5" color="inherit" component="span">
                  {n}
                </Typography>
              </MCCard>
            ))}
          </Box>
          {d.prizes.map((p) => (
            <Typography
              key={p}
              variant="subtitle1"
              color="inherit"
              component="p"
            >
              {p}
            </Typography>
          ))}
          {i % 2 === 0 ? (
            <Box marginTop={1} marginBottom={2}>
              <Divider />
            </Box>
          ) : null}
        </Fragment>
      ))}
    </DialogContent>
  );
};

export default LottoContent;
