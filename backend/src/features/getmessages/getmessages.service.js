import prisma from '../../prisma/prismaClient.js';

/**
 * Service function for fetching messages from the database.
 * Fetches all messages or filters them by tag_id if provided.
 *
 * @function getMessagesService
 * @param {number} [tag_id=0] - The tag ID for filtering messages.
 * @returns {Promise<Array<{ id: number, content: string, created_at: Date, nickname: string, tag_id: number }>>}
 * A promise that resolves to an array of message objects.
 */
export const getMessagesService = async (tag_id = 0) => {
    const messages = await prisma.messages.findMany({
        where: { tag_id },
        orderBy: { created_at: 'asc' },
        select: { content: true, created_at: true, nickname: true, tag_id: true }
    });
    return messages;
};
