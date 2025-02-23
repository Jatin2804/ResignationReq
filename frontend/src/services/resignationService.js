import axios from 'axios';

const API_URL = 'http://localhost:8080/api/resignations';

export const submitResignation = async (resignationData) => {
  const response = await axios.post(`${API_URL}/submit`, resignationData, {
    headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}` },
  });
  return response.data;
};
