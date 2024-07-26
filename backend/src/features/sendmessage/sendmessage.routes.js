import { Router } from 'express';
import { sendMessage } from './sendmessage.controller.js';
import { validateRequestBody, messageSchema } from '../../middleware/validation.js';
import rateLimiter from '../../middleware/rateLimiter.js';

const router = Router();

/**
 * Route for sending a new message.
 * This route handles POST requests to create a new message.
 * Includes rate limiting and request body validation.
 *
 * @route POST /api/message
 * @access Public
 * @middleware rateLimiter - Limits the number of requests from a single IP.
 * @middleware validateRequestBody - Validates the request body against the messageSchema.
 * @controller sendMessage - Handles creating a new message.
 */
router.post('/', rateLimiter, validateRequestBody(messageSchema), sendMessage);

export default router;
