import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Box } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

type Row = {
  no: number,
  name: string,
  score: number
}

type Props = {
  rows: Row[]
}

export default function RankingTable({rows}: Props) {
  return (
    <>
      <Box sx={{display:'flex', justifyContent:'start', width:'100%'}}>
        <EmojiEventsIcon/>
        <Typography sx={{fontWeight: 'bold'}}>Ranking</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="Round">
          <TableHead>
            <TableRow sx={{fontWeight: 'bold'}}>
              <TableCell>No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">{row.no}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}