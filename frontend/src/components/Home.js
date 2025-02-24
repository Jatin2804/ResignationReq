import { Typography } from '@mui/material';
import React from 'react';

const Home = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('./hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
          zIndex: 1,
        }}
      />
      <div style={{ zIndex: 2, color: "white" }}>
        <Typography variant="h2">
          Hey Welcome User 😊
        </Typography>
        <Typography variant="h5">
          Login/Register to continue
        </Typography>
      </div>
    </div>
  );
};

export default Home;
