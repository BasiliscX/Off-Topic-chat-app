import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend del Off Topic funcionando correctamente');
});

app.get('/api/messages', async (req, res) => {
    try {
        console.log('GET /api/messages');
        const messages = await prisma.message.findMany({
            orderBy: { createdAt: 'desc' }
        });
        console.log('Mensajes obtenidos:', messages);
        res.json(messages);
    } catch (error) {
        console.error('Error al obtener mensajes:', error);
        res.status(500).send('Error al obtener mensajes');
    }
});

app.post('/api/messages', async (req, res) => {
    try {
        console.log('POST /api/messages', req.body);
        const { content } = req.body;
        if (!content) {
            return res.status(400).send('El contenido del mensaje es requerido');
        }
        const newMessage = await prisma.message.create({
            data: { content }
        });
        console.log('Mensaje creado:', newMessage);
        res.status(201).json(newMessage);
    } catch (error) {
        console.error('Error al crear mensaje:', error);
        res.status(500).send('Error al crear mensaje');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
