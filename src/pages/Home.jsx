import React from 'react';
import { Typography } from "@mui/material";
import { Container } from '@mui/material';

function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography 
          sx={{
            textAlign: 'center',
            marginTop: '5rem',
            color: 'rgba(0, 0, 0, 0.6)',
          }} 
          variant="h4"
        >
          home
        </Typography>
      </Container>
    </>
  )
}

export default Home
