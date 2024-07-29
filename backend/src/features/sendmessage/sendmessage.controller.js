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
        const { content, nickname, tag_id } = req.body;
        const newMessage = await sendMessageService(content, nickname, tag_id);

        const responseMessage = {
            ...newMessage,
            id: newMessage.id.toString(),
            tag_id: newMessage.tag_id ? newMessage.tag_id.toString() : null,
        };

        res.status(201).json(responseMessage);
    } catch (error) {
        console.error('Error creating message:', error);
        res.status(500).send('Error creating message');
    }
};
