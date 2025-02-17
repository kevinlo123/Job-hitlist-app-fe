import React from 'react';
import { Typography } from "@mui/material";
import { Container } from '@mui/material';

function DeleteJob() {
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
          Delete a Job
        </Typography>
      </Container>
    </>
  )
}

export default DeleteJob
