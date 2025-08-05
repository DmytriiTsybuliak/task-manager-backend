import mongoose from 'mongoose';
import { env } from '../utils/env';

export const initMongoDB = async () => {
  try {
    const user = env('MONGODB_USER');
    const dbName = env('MONGODB_DB');
    const password = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    console.log('Connecting to MongoDB...');
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${dbName}?retryWrites=true&w=majority`
    );
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to initialize MongoDB');
  }
};
