const express = require('express');
const dotenv = require('dotenv'); // Move dotenv to the top
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const resignationRoutes = require('./routes/resignationRoutes');
const exitInterviewRoutes = require('./routes/exitInterviewRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/resignations', resignationRoutes);
app.use('/api/exit-interviews', exitInterviewRoutes);

module.exports = app;
