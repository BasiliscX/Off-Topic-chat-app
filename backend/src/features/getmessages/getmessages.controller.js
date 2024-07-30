import { getMessagesService } from './getmessages.service.js';

/**
 * Controller function for fetching messages.
 * This function handles the HTTP GET request to retrieve messages.
 *
 * @function getMessages
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 * @throws {Error} Will return a 500 status code if there is an error fetching the messages.
 */
export const getMessages = async (req, res) => {
    try {
        const tagId = parseInt(req.query.tag_id, 10) || 0;
        const messages = await getMessagesService(tagId);
        res.json(messages.map(msg => ({
            ...msg,
            created_at: msg.created_at.toISOString()
        })));
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).send('Error fetching messages');
    }
};

