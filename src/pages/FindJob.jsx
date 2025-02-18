import React, { useEffect, useState } from 'react';
import { Typography, Container, Box, TextField, Skeleton, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import OutlinedCard from '../components/Job';

function FindJob() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("All Jobs");

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

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.name);
    };

    const filteredJobs = jobs.length > 0 ? jobs.filter((job) => {
        const jobTitle = job.title?.toLowerCase() || "";
        const jobCompany = job.company?.toLowerCase() || "";
        const matchesSearch = searchQuery ? jobTitle.includes(searchQuery) || jobCompany.includes(searchQuery) : true;
        const matchesFilter = (() => {
            if (selectedFilter === "All Jobs") {
                return true;
            } else if (selectedFilter === "Front End") {
                return job.role === "FE";
            } else if (selectedFilter === "Back End") { 
                return job.role === "BE";
            } else if (selectedFilter === "Full Stack") {
                return job.role === "FS";
            } else if (selectedFilter === "Salary > 100k") {    
                return parseInt(job.salary) > 100;
            } else if (selectedFilter === "Salary < 100k") {      
                return parseInt(job.salary) < 100;
            }  
        })();

        return matchesSearch && matchesFilter;
    }) : [];

    return (
        <>
            <Container maxWidth="xl">
                <Box 
                    sx={{
                        maxWidth: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '2rem'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            justifyContent: 'center',
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
                            id="search"
                            label="Search by job title or company"
                            variant="outlined"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />

                        <FormGroup
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                marginBottom: '1.5rem',
                                gap: "1rem"
                            }}
                        >
                            {["All Jobs", "Front End", "Back End", "Full Stack", "Salary > 100k", "Salary < 100k"].map((label) => (
                                <FormControlLabel
                                    key={label}
                                    control={
                                        <Checkbox
                                            checked={selectedFilter === label}
                                            onChange={handleFilterChange}
                                            name={label}
                                        />
                                    }
                                    sx={{
                                        color: 'black',
                                    }}
                                    label={label} 
                                />
                            ))}
                        </FormGroup>
                    </Box>
                </Box>

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
                    ) : filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => <OutlinedCard key={job.id} job={job} />)
                    ) : (
                        <Typography sx={{ width: '100%', textAlign: 'center' }}>
                            No jobs found.
                        </Typography>
                    )}
                </Box>
            </Container>
        </>
    );
}

export default FindJob;
