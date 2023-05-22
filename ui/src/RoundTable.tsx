import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Box } from '@mui/material';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

type Row = {
  name: string,
  point: number,
  multiplier: number
}

type Props = {
  rows: Row[]
}

export default function RoundTable({rows}: Props) {
  return (
    <>
      <Box sx={{display:'flex', justifyContent:'start', width:'100%'}}>
        <LeaderboardIcon/>
        <Typography sx={{fontWeight: 'bold'}}>Current Round</Typography>
      </Box>
      <TableContainer component={Paper}>      
        <Table size="small" aria-label="Round">
          <TableHead>
            <TableRow sx={{fontWeight: 'bold'}}>
              <TableCell>Name</TableCell>
              <TableCell>Point</TableCell>
              <TableCell>Multiplier</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell>{row.point}</TableCell>
                <TableCell>{row.multiplier}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}