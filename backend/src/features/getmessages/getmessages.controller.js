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
        const tag_id = parseInt(req.query.tag_id, 10) || 0; // Predeterminado a 0 si no se proporciona
        const messages = await getMessagesService(tag_id);
        
        // Verificar que messages no sea undefined o null
        if (!messages) {
            return res.status(404).json({ error: 'No messages found' });
        }

        // Si todo está bien, responder con los mensajes
        res.json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).send('Error fetching messages');
    }
};
