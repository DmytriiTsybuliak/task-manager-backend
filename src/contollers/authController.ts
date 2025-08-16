import { Request, Response } from 'express';
import { loginUser, signupUser } from '../services/authService';
import { Controller } from '../utils/controllerWr';
import { createToken } from '../utils/jwt';

const setupCookies = (res: Response, token: string) => {
  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'none',
    path: '/',
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export const loginCtrl: Controller = async (req, res) => {
  const { user } = await loginUser(req.body);
  const token = createToken(user._id as string);
  setupCookies(res, token);
  res.status(200).json({
    status: 200,
    message: 'Successfully logged in',
    data: user,
  });
};

export const signupCtrl: Controller = async (req, res) => {
  const { user } = await signupUser(req.body);
  const token = createToken(user._id as string);
  setupCookies(res, token);
  res.status(201).json({
    status: 201,
    message: 'Successfully signed up',
    data: user,
  });
};

export const logout = async (_req: Request, res: Response) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out' });
  res.status(204).send();
};
