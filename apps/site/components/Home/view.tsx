import { FunctionComponent, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { Calendar } from '@cr-lottery/ui/calendar';
import { BackdropLoading } from '@cr-lottery/ui/backdrop-loading';
import { useHomeLazyQuery } from '@cr-lottery/react-hooks-lib';
import { HomeProps } from './types';
import { mapDrawsToEvent } from './utils';
import { ResultModal } from './ResultModal';

const Home: FunctionComponent<HomeProps> = ({ draws }) => {
  const [getDraws, { loading, data }] = useHomeLazyQuery();
  const [selectedDraw, setSelectedDraw] = useState(null);
  const events = mapDrawsToEvent(data?.drawsMonth || draws);
  const onNavigate = (month: Date) =>
    getDraws({
      variables: { month: month.toISOString() },
    });
  const onCloseResultModal = () => {
    setSelectedDraw(null);
  };

  return (
    <>
      {loading && <BackdropLoading loading={loading} />}
      <Grid container justify="center">
        <Grid item xs={10}>
          <Box marginBottom={4}>
            <Typography align="center" variant="h3" component="h1">
              CR Lottery
            </Typography>
          </Box>
          <Calendar
            events={events}
            onNavigate={onNavigate}
            onSelectEvent={setSelectedDraw}
          />
        </Grid>
      </Grid>
      <ResultModal draw={selectedDraw} onClose={onCloseResultModal} />
    </>
  );
};

export default Home;
