import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function OutlinedCard({ job }) {
  return (
    <Box sx={{ 
        minWidth: { xs: '100%', lg: '23%' },
        maxWidth: { xs: '100%', lg: '23%' },
        marginBottom: '1.5rem',
        marginRight: '1.5rem',
    }}>
      <Card variant="outlined">
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {job.company || "Unknown Company"}
          </Typography>
          <Typography variant="h5" component="div">
            {job.job_title || "Job Title"}
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
            {job.location || "Location Not Provided"}
          </Typography>
          <Typography variant="body2">
            {job.description || "No job description available."}
          </Typography>
          <Typography variant="body2">
            Salary: <strong>{job.salary || "No job salary available."}</strong>
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            size="small" 
            href={job.job_link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Details
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
