import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ListIcon from '@mui/icons-material/List';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';

function BottomNav() {
    const [value, setValue] = React.useState(0);
  
    return (
        <BottomNavigation
            sx={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                boxShadow: 3, // Adds elevation
            }}
            showLabels
            value={value}
            onChange={(newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction
                label="All Jobs" 
                icon={<ListIcon />}
                component={Link} // Use Link for client-side navigation
                to="/" // Set the route
            />
            <BottomNavigationAction 
                label="Add a Job" 
                icon={<PostAddIcon />}
                component={Link}
                to="/add-job" // Set the route
            />
            <BottomNavigationAction 
                label="Delete a Job" 
                icon={<DeleteIcon />} 
                component={Link}
                to="/delete-job" // Set the route
            />
            <BottomNavigationAction 
                label="Find a Job" 
                icon={<FindInPageIcon />}
                component={Link}
                to="/find-job" // Set the route
            />
        </BottomNavigation>
    );
}
  
export default BottomNav;
