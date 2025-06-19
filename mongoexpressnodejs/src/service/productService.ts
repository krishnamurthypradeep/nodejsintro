
import { Product } from "../model/productSchema";
import { Request,Response } from "express";
import asyncHandler from 'express-async-handler'
import { IProduct } from "../model/product";
const getProducts = asyncHandler(async(req:Request,res: Response) =>{

    const products = await Product.find()
    res.status(200).json(products)
})
const createProduct = async(req:Request,res: Response) =>{

   const newProduct:IProduct =  req.body
  if(!newProduct.name || typeof newProduct.price !== 'number'){
    res.status(404)
    throw new Error(`Invalid Product ${newProduct.name}`)
  }
  const product =await Product.create(newProduct)
    res.status(201).json(product)
}
const updateProduct = async(req:Request,res: Response) =>{
    const updated = await Product.findByIdAndUpdate(req.params.id,
        {... req.body,$inc:{__v:1}}, {
    new: true,
    runValidators: true,
  });
  updated ? res.json(updated) : res.status(404).json({ message: 'Not Found' });
}
const findProductsByPrice = async(req:Request,res: Response) =>{
    
    const {minPrice,maxPrice}= req.query
    const filter: any ={}
    
    if(minPrice || maxPrice)
        filter.price = {
    ...(minPrice ? {$gte: Number(minPrice)}:{}),
    ...(maxPrice ? {$lte: Number(maxPrice)}:{})
        }
const products = await Product.find(filter)
  products ? res.json(products) : res.status(404).json({ message: 'Not Found' });
}
const getProductById = async(req:Request,res: Response) =>{

    const products = await Product.findById(req.params.id)
    if(!products){
        res.status(400)
        throw new Error(`product with ${req.params.id} not found`)
    }
    res.status(200).json(products)
}



const deleteProductById = async(req:Request,res: Response) =>{

    const products = await Product.find()
    res.status(200).json(products)
}
export default {getProducts,createProduct,getProductById,deleteProductById,updateProduct,findProductsByPrice}