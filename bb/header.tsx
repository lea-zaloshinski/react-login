import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box'; // ייבוא Box

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                   hello to my project  ✋🏻✋🏻✋🏻✋🏻             
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}> {/* הוספת Box עם gap */}
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;


