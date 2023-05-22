import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { TextField, Slider, Button, Box, Typography, createTheme, Stack } from '@mui/material';
import { LineChart, XAxis, Line, Label, ResponsiveContainer  } from 'recharts';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Person2Icon from '@mui/icons-material/Person2';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoundTable from './RoundTable';
import RankingTable from './RankingTable';
import Chat from './Chat';
import SpeedIcon from '@mui/icons-material/Speed';

const theme = createTheme({ palette: {
  mode: 'dark',
},});
const data: {current:number|null,  dot: number|null, tick: number}[] = [];

for(let i=0; i <= 10; ++i) {
  data.push({current: i, dot: null, tick: i });
}

data[10].dot = 10;

function createRoundData(
  name: string,
  point: number,
  multiplier: number,
) {
  return { name, point, multiplier };
}

const roundData = [
  createRoundData('You', 159, 6.0),
  createRoundData('Cpu 1', 1, 9.0),
  createRoundData('Cpu 2', 262, 16.0),
  createRoundData('Cpu 3', 305, 3.7),
  createRoundData('Cpu 4', 305, 3.7)
];

function createRankingData(
  no: number,
  name: string,
  score: number,
) {
  return { no, name, score };
}

const rankingData = [
  createRankingData(1, 'Dmitriy', 6.0),
  createRankingData(2, 'Cpu 1', 9.0),
  createRankingData(3, 'Cpu 2', 16.0),
  createRankingData(4, 'Cpu 3', 3.7),
  createRankingData(5, 'Cpu 4', 3.7)
];


function App() {
  return (
    <Grid container spacing={2} sx={{mt:2}}>
      <Grid xs={3}></Grid>
      <Grid xs={2} sx={{flexWrap: 'wrap', display:'flex', justifyContent:'center', alignContent:'start', p:2}}>
        <TextField
          required
          label="Points"
          type="number"
          defaultValue="1"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
          sx={{ width: `calc(50% - ${theme.spacing(1)})`, mr:2 }}
        />
        <TextField
          required
          label="Multiplier"
          type="number"
          defaultValue="0"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
          sx={{ width: `calc(50% - ${theme.spacing(1)})` }}
        />
        <Box sx={{ width: '100%', mb: 2, mt: 2 }}>
          <Box sx={{display:'flex', justifyContent:'start', width:'100%'}}>
            <SpeedIcon/>
            <Typography sx={{fontWeight: 'bold'}}>Current Round</Typography>
          </Box>
          <Slider
            aria-labelledby="speed"
            defaultValue={1}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={5}
          />
        </Box>
        <RoundTable rows={roundData}/>
        <Button variant="contained" sx={{ width: '100%', mt:2 }}>Start</Button>        
      </Grid>
      <Grid xs={4} sx={{ p:2 }}>
        <Stack direction="row" justifyContent="space-between">
          <Box sx={{ display: 'flex', justifyContent: 'start' }}>
            <MilitaryTechIcon/>
            <Typography>1000</Typography>          
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'start' }}>
            <Person2Icon/>
            <Typography>Dmitriy</Typography>          
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'start' }}>
            <AccessTimeIcon/>
            <Typography>11:30</Typography>          
          </Box>
        </Stack>
        <ResponsiveContainer width="100%"  height={500}>
          <LineChart data={data} margin={{ top: 10, left: 10, right: 10, bottom: 10 }}>
            <Label value="any text" position="center" />
            <XAxis label={{ value: '10.0x', offset: -250, position:'insideTop', fontWeight: 'bold', fontSize: 30 }} scale="point"/>
            <Line type="monotone" dataKey="tick" hide={true} />
            <Line type="monotone" connectNulls={false} dataKey="current" stroke="orange" dot={false} strokeWidth={3}/>
            <Line type="monotone" connectNulls={false} dataKey="dot" stroke="orange" dot={true} strokeWidth={10}/>
          </LineChart>
        </ResponsiveContainer>
      </Grid>
      <Grid xs={3}>
      </Grid>
      <Grid xs={3}>
      </Grid>
      <Grid xs={4}>
        <RankingTable rows={rankingData}/>
      </Grid>
      <Grid xs={2}>
        <Chat/>
      </Grid>
      <Grid xs={3}>
      </Grid>
    </Grid>
  );
}

export default App;