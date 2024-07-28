import { sendMessageService } from './sendmessage.service.js';

/**
 * Controller function for creating a new message.
 * This function handles the HTTP POST request to create a new message.
 *
 * @function sendMessage
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {void}
 * @throws {Error} Will return a 500 status code if there is an error creating the message.
 */
export const sendMessage = async (req, res) => {
    try {
        const { content, nickname } = req.body;
        const newMessage = await sendMessageService(content, nickname);
        res.status(201).json(newMessage);
    } catch (error) {
        console.error('Error creating message:', error);
        res.status(500).send('Error creating message');
    }
};
