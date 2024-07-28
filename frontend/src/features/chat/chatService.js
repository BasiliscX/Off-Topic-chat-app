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
 * @param {string} nickname - The nickname of the user sending the message.
 * @returns {Promise<Object>} A promise that resolves to the sent message object.
 */
export const postMessage = async (content, nickname) => {
  await axios.post(`${process.env.REACT_APP_API_URL}/message`, { content, nickname });
};
