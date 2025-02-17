import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent sx={{textAlign: 'left'}}>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, textAlign: 'left' }}>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div" xs={{textAlign: 'left'}}>
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5, textAlign: 'left' }}>adjective</Typography>
      <Typography xs={{textAlign: 'left'}} variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ 
        minWidth: { xs: '100%', sm: '23%' },
        marginBottom: '1.5rem' 
    }}>
        <Card variant="outlined">{card}</Card>
    </Box>
  );
}
