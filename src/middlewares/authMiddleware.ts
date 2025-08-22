import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { env } from '../utils/env';

interface AuthRequest extends Request {
  user?: unknown;
}
export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.cookies?.token;
  // const token2 = req.headers?.cookie?.split('token=')[1];
  // console.log('Token from cookies:', token);

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decodedUser = jwt.verify(token, env('JWT_SECRET'));
    req.user = decodedUser;
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
