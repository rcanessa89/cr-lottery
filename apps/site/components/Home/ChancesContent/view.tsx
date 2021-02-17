import { FunctionComponent } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { resultNumberFormat } from '@cr-lottery/utils/result-number-format';
import { ChancesContentProps } from './types';

const ChancesContent: FunctionComponent<ChancesContentProps> = ({
  chancesResults,
}) => {
  const rows = chancesResults.slice().sort((a, b) => a.order - b.order);

  return (
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
          {rows.map((row) => (
            <TableRow key={row.order}>
              <TableCell align="left" variant="head">
                {row.order}º
              </TableCell>
              <TableCell align="center">
                {resultNumberFormat(row.number)}
              </TableCell>
              <TableCell align="center">{row.series}</TableCell>
              <TableCell align="center">{row.prize}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ChancesContent;
