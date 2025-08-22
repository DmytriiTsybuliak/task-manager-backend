import jwt from 'jsonwebtoken';
import { env } from './env';

export const createToken = (userId: string) => {
  return jwt.sign({ userId }, env('JWT_SECRET'), {
    expiresIn: env('JWT_EXPIRES_IN') as jwt.SignOptions['expiresIn'],
  });
};
