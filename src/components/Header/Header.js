import React from 'react'
import './Header.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



function Header({refreshingData}) {
    return (
        <AppBar className="app-bar" position="sticky">
            <Typography className="box" variant="h6" color="inherit" component="div">
                Asian Countries
            </Typography>
            <div className="button">
                {/* this button will refresh the data from the api */}
                <Button color="success" variant="contained" onClick={refreshingData}>Refresh</Button>
            </div>
        </AppBar>
      
    )
}

export default Header
