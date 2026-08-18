import express from 'express';
import { connectDb } from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8888;

const startServer = async () => {
  await connectDb();
  app.listen(() => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
