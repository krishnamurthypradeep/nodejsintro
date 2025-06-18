
import { Product } from "../model/productSchema";
import { Request,Response } from "express";
const getProducts = async(req:Request,res: Response) =>{

    const products = await Product.find()
    res.status(200).json(products)
}
const createProduct = async(req:Request,res: Response) =>{

    const products = await Product.find()
    res.status(200).json(products)
}
const getProductById = async(req:Request,res: Response) =>{

    const products = await Product.find()
    res.status(200).json(products)
}
const deleteProductById = async(req:Request,res: Response) =>{

    const products = await Product.find()
    res.status(200).json(products)
}
export default {getProducts,createProduct,getProductById,deleteProductById}