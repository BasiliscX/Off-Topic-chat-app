import prisma from '../../prisma/prismaClient.js';

/**
 * Service function for creating a new message in the database.
 * Takes the message content and creates a new record in the database.
 *
 * @function sendMessageService
 * @param {string} content - The content of the message to be created.
 * @returns {Promise<{ id: number, content: string, createdAt: Date }>} 
 * A promise that resolves to the created message object.
 */
export const sendMessageService = async (content) => {
    const newMessage = await prisma.message.create({
        data: { content }
    });
    return newMessage;
};
