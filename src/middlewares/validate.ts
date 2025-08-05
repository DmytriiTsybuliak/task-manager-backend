// middlewares/validate.ts
import { Request, Response, NextFunction } from 'express';
import { ZodType } from 'zod';

export const validateBody =
  (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: 'Validation error',
        errors: result.error.message,
      });
    }

    req.body = result.data;
    next();
  };
