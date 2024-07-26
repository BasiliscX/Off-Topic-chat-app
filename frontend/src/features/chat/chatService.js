// src/features/chat/chatService.js
import axios from 'axios';

/**
 * Fetches messages from the server.
 * @returns {Promise<Array<{content: string, createdAt: Date}>>} A promise that resolves to an array of message objects.
 */
export const getMessages = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/messages`);
  return response.data;
};

/**
 * Sends a new message to the server.
 * @param {string} content - The content of the message to send.
 * @returns {Promise<Object>} A promise that resolves to the sent message object.
 */
export const postMessage = async (content) => {
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/message`, { content });
  return response.data;
};
