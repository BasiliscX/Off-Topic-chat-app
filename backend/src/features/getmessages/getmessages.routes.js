import { Router } from 'express';
import { getMessages } from './getmessages.controller.js';

const router = Router();

router.get('/', getMessages);

export default router;
