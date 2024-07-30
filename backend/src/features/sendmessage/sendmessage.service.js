import prisma from '../../prisma/prismaClient.js';

/**
 * Service function for creating a new message in the database.
 * Takes the message content, nickname, and tag_id, and creates a new record in the database.
 *
 * @function sendMessageService
 * @param {string} content - The content of the message to be created.
 * @param {string} nickname - The nickname of the user sending the message.
 * @param {number} tag_id - The tag ID for the message.
 * @returns {Promise<{ id: number, content: string, created_at: Date, nickname: string, tag_id: number }>}
 * A promise that resolves to the created message object.
 */
export const sendMessageService = async (content, nickname = 'Anon', tag_id = 0) => {
    const newMessage = await prisma.messages.create({
        data: { content, nickname, tag_id }
    });
    return newMessage;
};
