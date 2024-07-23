import prisma from '../../prisma/prismaClient.js';

export const getMessagesService = async () => {
    const messages = await prisma.message.findMany({
        orderBy: { createdAt: 'desc' },
        select: { content: true, createdAt: true }
    });
    return messages;
};
