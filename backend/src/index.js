import { Router } from 'express';
import sendMessageRoutes from './features/sendmessage/sendmessage.routes.js';
import getMessagesRoutes from './features/getmessages/getmessages.routes.js';

const router = Router();

router.use('/messages', getMessagesRoutes);
router.use('/message', sendMessageRoutes);

export default router;
