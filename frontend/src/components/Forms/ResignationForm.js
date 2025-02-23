import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import {submitResignation} from '../../services/resignationService';

function ResignationForm() {
  const [lastWorkingDay, setLastWorkingDay] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitResignation({ lastWorkingDay, reason });
      alert('Resignation submitted successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: '20px', marginTop: '50px' }}>
        <Typography variant="h5">Submit Resignation</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            type="date"
            label="Last Working Day"
            InputLabelProps={{ shrink: true }}
            value={lastWorkingDay}
            onChange={(e) => setLastWorkingDay(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Reason for Resignation"
            multiline
            rows={4}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
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

export default ResignationForm;
