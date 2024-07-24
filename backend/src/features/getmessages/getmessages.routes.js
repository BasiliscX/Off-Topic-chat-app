import { Router } from 'express';
import { getMessages } from './getmessages.controller.js';
import apicache from 'apicache';

const cache = apicache.options({ enabled: false }).middleware;
const router = Router();

router.get('/', cache('0 seconds'), getMessages);

export default router;