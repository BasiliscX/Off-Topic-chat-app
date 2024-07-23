import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/messages', async (req, res) => {
    const messages = await prisma.message.findMany({
        orderBy: { createdAt: 'desc' }
    });
    res.json(messages);
});

app.post('/messages', async (req, res) => {
    const { content } = req.body;
    const newMessage = await prisma.message.create({
        data: { content }
    });
    res.status(201).json(newMessage);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
