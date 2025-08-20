import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { env } from '../utils/env';

interface AuthRequest extends Request {
  user?: unknown; // Define the user type as needed
}
export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.cookies?.token;
  // console.log('Token from cookies:', token);

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decodedUser = jwt.verify(token, env('JWT_SECRET'));
    // console.log('Decoded token:', decodedUser);
    req.user = decodedUser; // Assuming the decoded token contains user information
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
