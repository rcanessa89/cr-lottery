import { FunctionComponent } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import DialogContent from '@material-ui/core/DialogContent';

import { resultNumberFormat } from '@cr-lottery/utils/result-number-format';
import { colonesFormat } from '@cr-lottery/utils/colones-format';
import { LoteriaContentProps } from './types';

const LoteriaContent: FunctionComponent<LoteriaContentProps> = ({
  loteriaResults,
}) => {
  const rows = loteriaResults.slice().sort((a, b) => a.order - b.order);
  const bigPrizesRows = loteriaResults
    .slice()
    .sort((a, b) => b.prize - a.prize)
    .slice(0, 3);

  return (
    <DialogContent>
      <Box marginBottom={4} clone>
        <TableContainer component={Paper}>
          <Table aria-label="Tabla de chances">
            <TableHead>
              <TableRow>
                <TableCell align="left"></TableCell>
                <TableCell align="center">Numero</TableCell>
                <TableCell align="center">Serie</TableCell>
                <TableCell align="center">Premio</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bigPrizesRows.map((row, i) => (
                <TableRow key={row.order}>
                  <TableCell align="left" variant="head">
                    {i + 1}º
                  </TableCell>
                  <TableCell align="center">
                    {resultNumberFormat(row.number)}
                  </TableCell>
                  <TableCell align="center">{row.series}</TableCell>
                  <TableCell align="center">
                    {colonesFormat(row.prize)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="Tabla de chances">
          <TableHead>
            <TableRow>
              <TableCell align="left">Orden</TableCell>
              <TableCell align="center">Numero</TableCell>
              <TableCell align="center">Serie</TableCell>
              <TableCell align="center">Premio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.order}>
                <TableCell align="center" variant="head">
                  {row.order}
                </TableCell>
                <TableCell align="center">
                  {resultNumberFormat(row.number)}
                </TableCell>
                <TableCell align="center">{row.series}</TableCell>
                <TableCell align="center">{colonesFormat(row.prize)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DialogContent>
  );
};

export default LoteriaContent;
