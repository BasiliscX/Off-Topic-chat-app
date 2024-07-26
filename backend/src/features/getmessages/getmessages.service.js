import prisma from '../../prisma/prismaClient.js';

/**
 * Retrieves a list of messages from the database, sorted by creation date in descending order.
 * Only the content and creation date of each message are returned.
 *
 * @returns {Promise<Array<{ content: string, createdAt: Date }>>} A promise that resolves to an array of objects,
 * each representing a message with its content and creation date.
 */
export const getMessagesService = async () => {
    const messages = await prisma.message.findMany({
        orderBy: { createdAt: 'desc' },
        select: { content: true, createdAt: true }
    });
    return messages;
};
