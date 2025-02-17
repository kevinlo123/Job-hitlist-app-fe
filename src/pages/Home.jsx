import React from 'react';
import { Typography, Container } from "@mui/material";
import Job from '../components/job';
import { Box } from '@mui/system';

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
          {/* First Row of Jobs */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'space-between' }, // Center on small screens
              flexWrap: 'wrap', // Allow wrapping of job boxes on smaller screens
              marginBottom: '1.45rem',
            }} 
          > 
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
          </Box>
        </Typography>
      </Container>
    </>
  )
}

export default Home;
