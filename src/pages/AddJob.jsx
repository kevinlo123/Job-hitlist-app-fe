import React, { useEffect, useState } from 'react';
import { FormGroup, TextField, Box, Button, Typography, Skeleton, Container } from "@mui/material";
import OutlinedCard from '../components/Job';

function AddJob() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    job_title: '',
    company: '',
    location: '',
    salary: '',
    job_link: ''
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://wonderful-praline-2600f6.netlify.app/db.json');
        if (!response.ok) throw new Error('Failed to fetch jobs');

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.job_title || !formData.company) return;

    const newJob = {
      id: Date.now(),
      ...formData,
    };

    setJobs([newJob, ...jobs]); 
    setFormData({ job_title: '', company: '', location: '', salary: '', job_link: '' }); 
  };

  return (
    <>
      <Typography sx={{ textAlign: 'center', marginTop: '5rem', color: 'rgba(0, 0, 0, 0.6)' }} variant="h4">
        Add a Job to the List
      </Typography>

      <Container maxWidth="xl">
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Box sx={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', marginTop: '2rem', flexDirection: 'column' }}>
              <TextField
                fullWidth
                name="job_title"
                value={formData.job_title}
                onChange={handleChange}
                label="Job Title"
                variant="outlined"
                sx={{ maxWidth: '675px', marginBottom: '1.5rem', alignSelf: 'center' }}
              />
              <TextField
                fullWidth
                name="company"
                value={formData.company}
                onChange={handleChange}
                label="Company"
                variant="outlined"
                sx={{ maxWidth: '675px', marginBottom: '1.5rem', alignSelf: 'center' }}
              />
              <TextField
                fullWidth
                name="location"
                value={formData.location}
                onChange={handleChange}
                label="Location"
                variant="outlined"
                sx={{ maxWidth: '675px', marginBottom: '1.5rem', alignSelf: 'center' }}
              />
              <TextField
                fullWidth
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                label="Salary"
                variant="outlined"
                sx={{ maxWidth: '675px', marginBottom: '1.5rem', alignSelf: 'center' }}
              />
              <TextField
                fullWidth
                name="job_link"
                value={formData.job_link}
                onChange={handleChange}
                label="Job Link"
                variant="outlined"
                sx={{ maxWidth: '675px', marginBottom: '1.5rem', alignSelf: 'center' }}
              />

              <Button 
                variant="outlined"
                color="primary"
                type="submit"
                sx={{ width: '100%', maxWidth: '675px', margin: '0 auto' }}
              >
                Submit
              </Button>
            </Box>
          </FormGroup>
        </form>

        {/* Job List */}
        <Typography sx={{ textAlign: 'center', marginTop: '5rem', color: 'rgba(0, 0, 0, 0.6)' }} variant="h4">
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-start' },
              flexWrap: 'wrap',
              marginBottom: '1.45rem',
              columnGap: '1rem',
            }} 
          >
            {loading ? (
              [...Array(12)].map((_, index) => (
                <Box key={index} sx={{ minWidth: { xs: '100%', sm: '32.55%' }, marginBottom: '1.5rem' }}>
                  <Skeleton variant="rectangular" width="100%" height={180} />
                </Box>
              ))
            ) : jobs.length > 0 ? (
              jobs.map((job) => <OutlinedCard key={job.id} job={job} />)
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

export default AddJob;
