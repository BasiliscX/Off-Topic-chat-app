import { Router } from 'express';
import { sendMessage } from './sendmessage.controller.js';

const router = Router();

router.post('/', sendMessage);

export default router;
