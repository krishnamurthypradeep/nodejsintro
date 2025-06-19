import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../model/userSchema';
import { IUser } from '../model/user';

interface JwtPayload {
  id: string;
}

export interface AuthenticatedRequest extends Request {
  user?: IUser;
}

const protect = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let token: string | undefined;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      console.log(`before try`)
      token = req.headers.authorization.split(' ')[1];
console.log(`token ${token}`)
      const decoded = jwt.verify(token, 'admin123') as JwtPayload;
      console.log(`token ${decoded}`)
      const user = await User.findById(decoded.id).select('-password'); // Exclude password
     console.log(`User Details ${user}`)
      if (!user) {
        res.status(401);
        throw new Error('Not Authorized, user not found');
      }

      req.user = user;
      next();
    } catch (error:any) {
      console.error('Jwt verification falied',error.message)
      res.status(401).json({ message: 'Not Authorized, invalid token' });
    }
  } else {
    res.status(401).json({ message: 'No token provided' });
  }
};

export default protect;
