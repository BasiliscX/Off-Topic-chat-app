import { PrismaClient } from '@prisma/client';

/**
 * Prisma Client for interacting with the database.
 * Provides methods for querying and mutating the database.
 */
const prisma = new PrismaClient();

export default prisma;
