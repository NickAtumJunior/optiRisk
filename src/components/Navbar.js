import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
      position="fixed" 
      color='appbar'
      elevation={1}
      sx={{
        backdropFilter:'blur(153px)'
      }}
      >
        <Toolbar>
          <Typography variant="h6"
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          component="div"
           sx={{ flexGrow: 9 }}>

            <img src='./assets/opti.png' alt='logo' width="7%"/>

          </Typography>
          <Button
           color="inherit"
           
           sx={{
            textTransform:'capitalize',
            color:'#fff',
            fontSize:'1rem',
            fontFamily:"'Poppins', sans-serif",
            fontWeight:'100',

           }}
           >
            products
            </Button>
            <Button
           color="inherit"
           sx={{
            textTransform:'capitalize',
            color:'#fff',
            fontSize:'1rem',
            fontFamily:"'Poppins', sans-serif",
            fontWeight:'100',
           }}
           >
            Solutions
            </Button>
            <Button
           color="inherit"
           sx={{
            textTransform:'capitalize',
            color:'#fff',
            fontSize:'1rem',
            fontFamily:"'Poppins', sans-serif",
            fontWeight:'100'
           }}
           >
            Services
            </Button>
            <Button
           color="inherit"
           sx={{
            textTransform:'capitalize',
            color:'#fff',
            fontSize:'1rem',
            fontFamily:"'Poppins', sans-serif",
            fontWeight:'100'
           }}
           >
            About us
            </Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
