import { sendMessageService } from './sendmessage.service.js';

export const sendMessage = async (req, res) => {
    try {
        const { content } = req.body;
        if (!content) {
            return res.status(400).send('El contenido del mensaje es requerido');
        }
        const newMessage = await sendMessageService(content);
        res.status(201).json(newMessage);
    } catch (error) {
        console.error('Error al crear mensaje:', error);
        res.status(500).send('Error al crear mensaje');
    }
};
