import React from 'react';
import { Typography } from "@mui/material";
import { Container } from '@mui/material';
import { Box, TextField } from "@mui/material";

function FindJob() {
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
                    Find a Job
                    <Box 
                        sx={{
                            maxWidth: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '2rem'
                        }}
                        >
                        <TextField
                            fullWidth
                            color="primary"
                            sx={{
                            border: '1px solid white',
                            color: 'white',
                            maxWidth: '675px',
                            }} 
                            id="outlined-basic" 
                            label="Outlined" 
                            variant="outlined" 
                        />
                    </Box>
                </Typography>
            </Container>
        </>
    )
}

export default FindJob
