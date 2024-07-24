// index.mjs
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';
import morgan from 'morgan'; 
import helmet from 'helmet';
import routes from './src/index.js';
import rateLimiter from './src/middleware/rateLimiter.js'; 

dotenv.config();

const app = express();

const allowedOrigins = ['http://localhost:3000', 'https://off-topic-omega.vercel.app'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST'],
    credentials: true,
    optionsSuccessStatus: 200
}));

app.use(express.json());
app.use(compression());
app.use(morgan('combined'));
app.use(helmet());
app.use(rateLimiter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/api', routes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
