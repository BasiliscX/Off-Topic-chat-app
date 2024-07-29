import { getMessagesService } from './getmessages.service.js';

/**
 * Controller function for fetching messages.
 * This function handles the HTTP GET request to fetch messages from the database.
 *
 * @function getMessages
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 * @throws {Error} Will return a 500 status code if there is an error fetching messages.
 */
export const getMessages = async (req, res) => {
    try {
        const messages = await getMessagesService();
        const formattedMessages = messages.map(msg => ({
            ...msg,
            id: msg.id.toString(),
        }));
        res.json(formattedMessages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).send('Error fetching messages');
    }
};
