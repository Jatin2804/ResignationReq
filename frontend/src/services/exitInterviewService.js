import axios from 'axios';

const API_URL = 'http://localhost:8080/api/exit-interviews';

export const submitExitInterview = async (interviewData) => {
  const response = await axios.post(`${API_URL}/submit`, interviewData, {
    headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}` },
  });
  return response.data;
};
