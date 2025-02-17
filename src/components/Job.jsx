import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BusinessIcon from '@mui/icons-material/Business';

export default function OutlinedCard({ job, isDelete }) {
  return (
    <Box sx={{ 
        minWidth: { xs: '100%', lg: '23%' },
        maxWidth: { xs: '100%', lg: '23%' },
        marginBottom: '1.5rem',
        marginRight: { xs: '0', lg: '1.5rem' },

    }}>
      <Card variant="outlined">
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {`Job-ID: ${job.id}` || "Unknown Company"}
          </Typography>
          <Typography variant="h5" component="div">
            {job.job_title || "Job Title"}
          </Typography>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}  component="div">
            {job.company ? (
              <>
                <BusinessIcon /> &nbsp;
                {job.company}
              </>
            ) : (
              "Unknown Company"
            )}
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
            {job.location || "Location Not Provided"}
          </Typography>
          <Typography variant="body2">
            Salary: <strong>{job.salary || "No job salary available."}</strong>
          </Typography>
        </CardContent>
        <CardActions>
          {isDelete ? (
            <Button variant="outlined" color="error">
              Delete
            </Button>
          ) : (
            <Button 
              variant="outlined" color="primary"
              href={job.job_link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Go to Job
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}
