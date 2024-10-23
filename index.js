import { createServer } from 'node:http';
import { v4 as uuid } from 'uuid';
import express from 'express';
import dotenv from 'dotenv';
import { createClient } from '@libsql/client';
import { partialValidateAnimal, validateAnimal } from './validation/animalsScheme.js';

dotenv.config();

const dbtest = createClient({
  authToken: process.env.DB_TEST_TOKEN,
  url: process.env.DB_TEST_URL,
});

const PORT = process.env.PORT ?? 1234;

const app = express();
const server = createServer(app);
app.use(express.json());
app.use((req, res, next) => {

  const allowedAPIKey = process.env.API_KEY;

  console.log(allowedAPIKey !== req.headers['x-api-key']);
  if (req.headers['x-api-key'] !== allowedAPIKey && req.method === 'POST') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  next();
});

app.get('/animals', async (req, res) => {
  const animals = await dbtest.execute('SELECT * FROM Animals');
  res.json(animals.rows);
});

app.post('/animals', async (req, res) => {
  const { user_id: userId, type, condition, description, location, imgSrc, apiKey } = req.body;
  const id = uuid();

  try {
    const validation = validateAnimal(req.body);
    const animalsPostedByUser = await dbtest.execute({
      sql: 'SELECT * FROM Animals WHERE user_id = ?',
      args: [userId]
    });

    if (!validation.success) throw new Error(validation.error);

    if (animalsPostedByUser.rows.length >= 3) {
      console.log('no publicado');
      res.send('NO');
      return {
        code: 429,
        message: 'Too many publications'
      };
    }

    const result = await dbtest.execute({
      sql: 'INSERT INTO Animals (id, type, location, condition, description, imgSrc, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
      args: [id, type, location, condition, description, imgSrc, userId]
    });

    res.send('Ready');
  } catch (err) {
    console.log(err);
    res.send('Error');
  }
});

server.listen(PORT, () => {
  console.log('Estamos dentro', PORT);
});
