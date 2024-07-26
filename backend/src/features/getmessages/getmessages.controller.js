import { getMessagesService } from './getmessages.service.js';

/**
 * Controller function for retrieving a list of messages.
 * This function handles the HTTP GET request to fetch messages.
 *
 * @function getMessages
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 * @throws {Error} Will return a 500 status code if there is an error fetching the messages.
 */
export const getMessages = async (req, res) => {
    try {
        const messages = await getMessagesService();
        res.json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).send('Error fetching messages');
    }
};
