import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './src/index.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Backend del Off Topic funcionando correctamente');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
