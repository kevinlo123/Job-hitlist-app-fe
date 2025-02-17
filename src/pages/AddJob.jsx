import React from 'react';
import { Typography } from "@mui/material";
import { Container } from '@mui/material';

function AddJob() {
  return (
    <>
      <Container maxWidth="xl">
        <Typography 
          sx={{
            textAlign: 'center',
            marginTop: '5rem',
            color: 'rgba(0, 0, 0, 0.6)',
          }} 
          variant="h4"
        >
          Add a Job
        </Typography>
      </Container>
    </>
  )
}

export default AddJob
