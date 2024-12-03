import { createServer } from 'node:http';
import express from 'express';
import dotenv from 'dotenv';
import animalsRouter from './routes/animals.js';
import cors from 'cors';
import locationRouter from './routes/location.js';

dotenv.config();

const PORT = process.env.PORT ?? 5173;
const app = express();
const server = createServer(app);

app.use(express.json());

app.use((req, res, next) => {

  const allowedAPIKey = process.env.API_KEY;

  if (req.headers['x-api-key'] !== allowedAPIKey && req.method === 'POST') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  next();
});
app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use('/animals', animalsRouter);

app.use('/predictions', locationRouter);

server.listen(PORT, () => {
  console.log('Estamos dentro', PORT);
});
