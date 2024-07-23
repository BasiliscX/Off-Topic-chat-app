import { Router } from 'express';
import { getMessages } from './getmessages.controller.js';
import apicache from 'apicache';

const cache = apicache.middleware;
const router = Router();

router.get('/', cache('5 minutes'), getMessages);

export default router;
