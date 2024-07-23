import { Router } from 'express';
import { sendMessage } from './sendmessage.controller.js';
import { validateRequestBody, messageSchema } from '../../middleware/validation.js';

const router = Router();

router.post('/', validateRequestBody(messageSchema), sendMessage);

export default router;
