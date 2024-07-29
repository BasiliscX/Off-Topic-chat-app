import prisma from '../../prisma/prismaClient.js';

/**
 * Service function for fetching messages from the database.
 * This function retrieves messages from the 'messages' table.
 *
 * @function getMessagesService
 * @returns {Promise<Array<{ id: number, content: string, createdAt: Date, nickname: string }>>}
 * A promise that resolves to an array of messages.
 */
export const getMessagesService = async () => {
    const messages = await prisma.messages.findMany({
        orderBy: { created_at: 'desc' },
        select: { id: true, content: true, created_at: true, nickname: true }
    });
    return messages.map(msg => ({
        id: msg.id,
        content: msg.content,
        createdAt: msg.created_at,
        nickname: msg.nickname
    }));
};
