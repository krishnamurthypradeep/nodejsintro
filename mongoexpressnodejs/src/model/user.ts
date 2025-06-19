import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  role: 'admin' | 'seller' | 'customer';
  password: string;
}