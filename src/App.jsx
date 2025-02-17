import React from 'react';
import './App.css';
import { Typography, Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import BottomNav from './navigation/BottomNav'; 
import Home from './pages/Home'; 
import FindJob from './pages/FindJob'; 
import AddJob from './pages/AddJob'; 
import DeleteJob from './pages/DeleteJob';

function App() {
  return (
    <Router>
      <Container maxWidth="xl">
        <Typography 
          sx={{
            textAlign: 'left',
            marginTop: '5rem',
            color: 'rgba(0, 0, 0, 0.6)',
            fontSize: { xs: '3rem', sm: '3.5rem', md: '4rem', lg: '4.5rem' },
          }} 
          variant="h1"
        >
          2025 Job HitList
        </Typography>
      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-job" element={<FindJob />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/delete-job" element={<DeleteJob />} />
      </Routes>

      <BottomNav />
    </Router>
  );
}

export default App;
