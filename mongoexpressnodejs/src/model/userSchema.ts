import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './user';
const userSchema = new Schema<IUser>({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['admin', 'seller', 'customer'],
    default: 'customer'
  }
});

const User = mongoose.model<IUser>('User', userSchema);
export default User;