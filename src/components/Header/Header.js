import React from 'react'
import './Header.css'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



function Header({refreshingData}) {
    return (
        <AppBar className="app-bar" position="sticky">
            <Typography className="box" variant="h6" color="inherit" component="div">
                Asian Countries
                <Button className="button" color="secondary" variant="contained" onClick={refreshingData}>Refresh</Button>
            </Typography>
        </AppBar>
      
    )
}

export default Header
