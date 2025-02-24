import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: "white", color: "primary.main" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "primary.main", flexGrow: 1 }}
        >
          Resignation Management System
        </Typography>
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to="/login"
          sx={{ marginX: "5px" }}
        >
          Login
        </Button>
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to="/register"
          sx={{ marginX: "5px" }}
        >
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
