import prisma from '../../prisma/prismaClient.js';

export const sendMessageService = async (content) => {
    const newMessage = await prisma.message.create({
        data: { content }
    });
    return newMessage;
};
