import prisma from '../../prisma/prismaClient.js';

/**
 * Service function for creating a new message in the database.
 * Takes the message content and nickname and creates a new record in the database.
 *
 * @function sendMessageService
 * @param {string} content - The content of the message to be created.
 * @param {string} nickname - The nickname of the user sending the message.
 * @returns {Promise<{ id: number, content: string, createdAt: Date, nickname: string }>}
 * A promise that resolves to the created message object.
 */
export const sendMessageService = async (content, nickname = 'Anon') => {
    const newMessage = await prisma.messages.create({
        data: { content, nickname }
    });
    return newMessage;
};
