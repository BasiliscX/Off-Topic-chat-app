// src/features/sendmessage/sendmessage.routes.js
import { Router } from 'express';
import { sendMessage } from './sendmessage.controller.js';
import { validateRequestBody, messageSchema } from '../../middleware/validation.js';
import rateLimiter from '../../middleware/rateLimiter.js'; // Importa el rate limiter

const router = Router();

router.post('/', rateLimiter, validateRequestBody(messageSchema), sendMessage);

export default router;
