import React from 'react';
import { Container, Typography } from '@mui/material';
import ResignationForm from "../Forms/ResignationForm"
import ExitInterviewForm from "../Forms/ExitInterviewForm"

function EmployeeDashboard() {
  return (
    <Container>
      <Typography variant="h4">Employee Dashboard</Typography>
     
      <ResignationForm/>
      <ExitInterviewForm/>
    </Container>
  );
}

export default EmployeeDashboard;
