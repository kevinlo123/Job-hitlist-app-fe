import React from 'react';
import { FormGroup, TextField, Box, Button, Typography } from "@mui/material";
import { Container } from '@mui/material';

function AddJob() {
  return (
    <>
      <Typography 
        sx={{
          textAlign: 'center',
          marginTop: '5rem',
          color: 'rgba(0, 0, 0, 0.6)',
        }} 
        variant="h4"
      >
        Add a Job to the list
      </Typography>
      <Container maxWidth="xl">
        <FormGroup>
          <Box 
            sx={{
                maxWidth: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2rem',
                flexDirection: 'column',
            }}
          >
            <TextField
              fullWidth
              color="primary"
              sx={{
                  border: '1px solid white',
                  color: 'white',
                  maxWidth: '675px',
                  marginBottom: '1.5rem',
                  alignSelf: 'center',
              }}
              label="Job Title"
              variant="outlined"
            />
            <TextField
              fullWidth
              color="primary"
              sx={{
                  border: '1px solid white',
                  color: 'white',
                  maxWidth: '675px',
                  marginBottom: '1.5rem',
                  alignSelf: 'center',
              }}
              label="Company"
              variant="outlined"
            />
            <TextField
              fullWidth
              color="primary"
              sx={{
                  border: '1px solid white',
                  color: 'white',
                  maxWidth: '675px',
                  marginBottom: '1.5rem',
                  alignSelf: 'center',
              }}
              label="Location"
              variant="outlined"
            />
            <TextField
              fullWidth
              color="primary"
              sx={{
                  border: '1px solid white',
                  color: 'white',
                  maxWidth: '675px',
                  marginBottom: '1.5rem',
                  alignSelf: 'center',
              }}
              label="Salary"
              variant="outlined"
            />
           <TextField
              fullWidth
              color="primary"
              sx={{
                  border: '1px solid white',
                  color: 'white',
                  maxWidth: '675px',
                  marginBottom: '1.5rem',
                  alignSelf: 'center',
              }}
              label="Job Link"
              variant="outlined"
            />

            <Button 
              variant="outlined" color="primary"
              sx={{
                width: '100%',
                maxWidth: '675px',
                margin: '0 auto',
              }}
            >
              Submit
            </Button>
          </Box>
        </FormGroup>
      </Container>
    </>
  )
}

export default AddJob
