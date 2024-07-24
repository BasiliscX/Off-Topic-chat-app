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

app.use(cors());
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

const PORT = process.env.PORT || 3000 + (process.env.NODE_APP_INSTANCE ? parseInt(process.env.NODE_APP_INSTANCE) : 0);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});