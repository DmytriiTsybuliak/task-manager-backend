import { model, Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    name: { type: String, default: '' },
  },
  {
    timestamps: true,
  }
);

export const User = model('User', UserSchema);
