import React from 'react';
import './App.css';
import { Typography, Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct imports for routing
import BottomNav from './navigation/BottomNav'; // Your BottomNav component
import Home from './pages/Home'; // Home page
import FindJob from './pages/FindJob'; // AllJobs page
import AddJob from './pages/AddJob'; // AddJob page
import DeleteJob from './pages/DeleteJob'; // DeleteJob page

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
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

      {/* Define your routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-job" element={<FindJob />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/delete-job" element={<DeleteJob />} />
      </Routes>

      {/* Navigation component */}
      <BottomNav />
    </Router>
  );
}

export default App;
