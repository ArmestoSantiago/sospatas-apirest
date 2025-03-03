import { createClient } from '@libsql/client';
import dotenv from 'dotenv';

dotenv.config();

export const dbconnection = createClient({
  authToken: process.env.DB_TEST_TOKEN,
  url: process.env.DB_TEST_URL,
});