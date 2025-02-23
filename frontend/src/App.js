import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import HRDashboard from './components/Dashboard/HRDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hr" element={<HRDashboard />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
