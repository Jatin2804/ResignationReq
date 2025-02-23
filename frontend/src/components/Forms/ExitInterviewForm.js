import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import {submitExitInterview} from '../../services/exitInterviewService';

function ExitInterviewForm() {
  const [answers, setAnswers] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitExitInterview(answers);
      alert('Exit Interview submitted successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: '20px', marginTop: '50px' }}>
        <Typography variant="h5">Exit Interview</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Why are you leaving?"
            name="reason"
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="What did you like about your job?"
            name="likes"
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default ExitInterviewForm;
