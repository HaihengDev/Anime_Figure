import mongoose from 'mongoose';
import dotenv from 'dotenv';

export const connectDb = async () => {
  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error('MONGO_URI is not configured.');
    }

    await mongoose.connect(uri);
    console.log('MONGO_DB is connected!');
  } catch (err) {
    console.error('MONGO db connection failed', err);
    process.exit(1);
  }
};
