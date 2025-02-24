import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Check if user is logged in

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    localStorage.removeItem('role');  // Clear role
    navigate('/login'); // Redirect to login
  };

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

        {token ? (
          <Button
            color="secondary"
            variant="contained"
            onClick={handleLogout}
            sx={{ marginX: "5px" }}
          >
            Logout
          </Button>
        ) : (
          <>
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
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
