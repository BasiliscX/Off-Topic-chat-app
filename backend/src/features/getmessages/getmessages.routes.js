import { Router } from 'express';
import { getMessages } from './getmessages.controller.js';
import apicache from 'apicache';

const cache = apicache.options({ enabled: false }).middleware;
const router = Router();

/**
 * Route for fetching messages.
 * This route handles GET requests to retrieve a list of messages.
 * Includes caching middleware.
 *
 * @route GET /api/messages
 * @access Public
 * @middleware cache - Manages caching for the endpoint.
 * @controller getMessages - Handles fetching the messages from the database.
 */
router.get('/', cache('0 seconds'), getMessages);

export default router;
