import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
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
                boxShadow: 3,
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
                component={Link}
                to="/" 
            />
            <BottomNavigationAction 
                label="Add a Job" 
                icon={<PostAddIcon />}
                component={Link}
                to="/add-job" 
            />
            <BottomNavigationAction 
                label="Delete a Job" 
                icon={<DeleteIcon />} 
                component={Link}
                to="/delete-job" 
            />
            <BottomNavigationAction 
                label="Find a Job" 
                icon={<FindInPageIcon />}
                component={Link}
                to="/find-job"
            />
        </BottomNavigation>
    );
}
  
export default BottomNav;
