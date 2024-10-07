import dotenv from 'dotenv';
import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import clientsRouter from './routers/clients.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://www.alcotrade.com.ua/',
    'https://alcotrade.com.ua/',
  ], // Allow only this origin
  methods: 'GET,POST,PUT,DELETE', // Specify allowed methods
  credentials: true, // Allow cookies if needed
};

const PORT = Number(env('PORT', '4000'));

export const serverRunning = () => {
  const app = express();
  app.use(express.json());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(cors(corsOptions));

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello World',
    });
  });

  app.use(clientsRouter);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
