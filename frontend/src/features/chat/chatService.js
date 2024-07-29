// src/features/chat/chatService.js
import axios from 'axios';

/**
 * Fetches messages from the server.
 * Optionally filters messages by tag_id.
 * @param {number} [tag_id=0] - The tag ID for filtering messages.
 * @returns {Promise<Array<{content: string, createdAt: Date, nickname: string, tag_id: number}>>}
 * A promise that resolves to an array of message objects.
 */
export const getMessages = async (tag_id = 0) => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/messages`, { params: { tag_id } });
  return response.data;
};

/**
 * Sends a new message to the server.
 * @param {string} content - The content of the message to send.
 * @param {string} nickname - The nickname of the user sending the message.
 * @param {number} tag_id - The tag ID for the message.
 * @returns {Promise<Object>} A promise that resolves to the sent message object.
 */
export const postMessage = async (content, nickname, tag_id = 0) => {
  await axios.post(`${process.env.REACT_APP_API_URL}/message`, { content, nickname, tag_id });
};
