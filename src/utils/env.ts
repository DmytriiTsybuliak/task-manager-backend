import dotenv from 'dotenv';

dotenv.config();

interface EnvFunction {
  (name: string, defaultValue?: string): string;
}

export const env: EnvFunction = function (name, defaultValue) {
  const value = process.env[name];

  if (value) return value;

  if (defaultValue) return defaultValue;

  throw new Error(`Missing: process.env['${name}'].`);
};
