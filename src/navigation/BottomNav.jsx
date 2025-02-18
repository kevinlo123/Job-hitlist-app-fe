import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListIcon from '@mui/icons-material/List';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';

function BottomNav() {
    const location = useLocation();
    const [value, setValue] = React.useState(0);

    const routes = ["/", "/add-job", "/delete-job", "/find-job"];

    useEffect(() => {
        const currentIndex = routes.indexOf(location.pathname);
        setValue(currentIndex !== -1 ? currentIndex : 0);
    }, [location.pathname]);

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
            onChange={(newValue) => setValue(newValue)}
        >
            {routes.map((route, index) => (
                <BottomNavigationAction
                    key={route}
                    label={
                        index === 0 ? "All Jobs" :
                        index === 1 ? "Add a Job" :
                        index === 2 ? "Delete a Job" :
                        "Find a Job"
                    }
                    icon={
                        index === 0 ? <ListIcon /> :
                        index === 1 ? <PostAddIcon /> :
                        index === 2 ? <DeleteIcon /> :
                        <FindInPageIcon />
                    }
                    component={Link}
                    to={route}
                    sx={{
                        color: location.pathname === route ? "primary.main" : "text.secondary",
                        "& .MuiSvgIcon-root": {
                            color: location.pathname === route ? "primary.main" : "inherit",
                        }
                    }}
                />
            ))}
        </BottomNavigation>
    );
}

export default BottomNav;
