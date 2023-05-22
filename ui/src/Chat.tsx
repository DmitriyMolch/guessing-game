import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Typography, Box, TextField, Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

export default function Chat() {
  return (
    <>
      <Box sx={{display:'flex', justifyContent:'start', width:'100%'}}>
        <ChatIcon/>
        <Typography sx={{fontWeight: 'bold'}}>Chat</Typography>
      </Box>
      <Box component={Paper} sx={{p: 2}}>
        <Box sx={{maxHeight: 114, overflowY:'scroll'}}>
          <Box sx={{display: 'flex', justifyContent: 'start'}}>
            <Typography sx={{fontWeight: 'bold'}}>Dmitriy</Typography>: <Typography>Hello!!!</Typography> 
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'start'}}>
            <Typography sx={{fontWeight: 'bold'}}>Cpu1</Typography>: <Typography>World!!!</Typography> 
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'start'}}>
            <Typography sx={{fontWeight: 'bold'}}>Cpu1</Typography>: <Typography>OK!!!</Typography> 
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'start'}}>
            <Typography sx={{fontWeight: 'bold'}}>Cpu1</Typography>: <Typography>OK!!!</Typography> 
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'start'}}>
            <Typography sx={{fontWeight: 'bold'}}>Cpu1</Typography>: <Typography>OK!!!</Typography> 
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'start'}}>
            <Typography sx={{fontWeight: 'bold'}}>Cpu1</Typography>: <Typography>OK!!!</Typography> 
          </Box>
        </Box>              
        <Box sx={{display: 'flex', justifyContent: 'start', mt:2}}>
          <TextField label="Message" size="small"/>
          <Button variant="contained" sx={{ width: '100%', ml:2 }} size="small">Send</Button>
        </Box>
      </Box>
    </>
  );
}