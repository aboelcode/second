import axios from 'axios';

const API_URL = 'https://aboelcode.com/api/users';

// Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// Verify email
const verifyEmail = async (verificationData) => {
  const response = await axios.post(`${API_URL}/verify`, verificationData);
  
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  
  return response.data;
};

// Resend verification code
const resendVerificationCode = async (email) => {
  const response = await axios.post(`${API_URL}/resend-verification`, { email });
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  
  if (response.data && response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  
  return response.data;
};

// Get user profile
const getProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  
  const response = await axios.get(`${API_URL}/profile`, config);
  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
};

const api = {
  register,
  verifyEmail,
  resendVerificationCode,
  login,
  getProfile,
  logout,
};

export default api;