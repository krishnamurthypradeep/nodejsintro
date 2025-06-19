import { Request, Response } from 'express';
import {Product} from '../model/productSchema';

export const searchAndUpdateProductByName = async(req:Request,res: Response) =>{
  const { name } = req.params;
  const update = req.body;

  const product = await Product.findOneAndUpdate({ name }, update, {
    new: true,
    runValidators: true,
  });

  if (!product) return res.status(404).json({ message: 'Product not found' });

  return res.json(product);
};

