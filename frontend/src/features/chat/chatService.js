// src/features/chat/chatService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://off-topic-backend.vercel.app/api';

export const getMessages = async () => {
  const response = await axios.get(`${API_URL}/messages`);
  return response.data;
};

export const postMessage = async (content) => {
  const response = await axios.post(`${API_URL}/message`, { content });
  return response.data;
};
