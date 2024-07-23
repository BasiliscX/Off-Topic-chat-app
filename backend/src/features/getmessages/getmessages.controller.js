import { getMessagesService } from './getmessages.service.js';

export const getMessages = async (req, res) => {
    try {
        const messages = await getMessagesService();
        res.json(messages);
    } catch (error) {
        console.error('Error al obtener mensajes:', error);
        res.status(500).send('Error al obtener mensajes');
    }
};
