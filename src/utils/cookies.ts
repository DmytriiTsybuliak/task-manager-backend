import { Response } from 'express';

export const setupCookies = (res: Response, token: string) => {
  res.cookie('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: 1 * 30 * 60 * 1000,
  });
};
