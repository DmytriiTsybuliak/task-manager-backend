import { Request, Response } from 'express';
import { ZodError } from 'zod';

export function errorHandler(err: unknown, req: Request, res: Response) {
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: 'Validation error',
      errors: err.issues.map((e) => ({
        path: e.path.join('.'),
        message: e.message,
      })),
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: err.message || 'Internal server error',
    });
  }
  res.status(500).json({ message: 'Unknown error' });
}
