import React, { useEffect, useState } from 'react';
import { Typography, Container, Skeleton } from "@mui/material";
import OutlinedCard from '../components/Job';
import { Box } from '@mui/system';

function DeleteJob() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://wonderful-praline-2600f6.netlify.app/db.json');
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();

        setTimeout(() => {
          setJobs(data.Jobs);
          setLoading(false);
        }, 500); 
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    };

    fetchJobs();

  }, []);

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
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-start' }, 
              flexWrap: 'wrap', 
              marginBottom: '1.45rem',
              columnCount: { xs: 1, sm: 2, md: 3, lg: 4 },
              columnGap: '1rem',
            }} 
          > 
            {loading ? (
              [...Array(12)].map((_, index) => (
                <Box key={index} sx={{ minWidth: { xs: '100%', sm: '32.55%' }, marginBottom: '1.5rem'}}>
                  <Skeleton variant="rectangular" width="100%" height={180} />
                </Box>
              ))
            ) : jobs.length > 0 ? (
              jobs.map((job) => <OutlinedCard key={job.id} isDelete={true} job={job} />)
            ) : (
              <Typography sx={{ width: '100%', textAlign: 'center' }}>
                No jobs found.
              </Typography>
            )}
          </Box>
        </Typography>
      </Container>
    </>
  );
}

export default DeleteJob;

