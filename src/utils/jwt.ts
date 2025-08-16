import jwt from 'jsonwebtoken';
import { env } from './env';

export const createToken = (userId: string) => {
  return jwt.sign({ userId }, env('JWT_SECRET'), {
    expiresIn: '7d',
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, env('JWT_SECRET'));
};
