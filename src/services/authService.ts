import createHttpError from 'http-errors';
import { UserDB } from '../db/models/userSchema';

export const signupUser = async (data: { name: string; email: string; password: string }) => {
  const { name, email, password } = data;
  try {
    // const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserDB.create({ name, email, password });

    return { user };
  } catch {
    throw createHttpError(409, 'User with this email already exists');
  }
};

export const loginUser = async (data: { email: string; password: string }) => {
  const { email, password } = data;
  const user = await UserDB.findOne({ email });
  if (!user) throw createHttpError(404, 'User with this email not found');

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) throw createHttpError(401, 'Invalid password');

  return { user };
};
