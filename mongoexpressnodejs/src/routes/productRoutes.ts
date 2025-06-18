import express , {Request,Response } from 'express'
import productRoutes from '../service/productService'


import asyncHandler from 'express-async-handler'
const router = express.Router()

router.route('/').get(productRoutes.getProducts)
.post(productRoutes.createProduct)

router.route('/:id').get(productRoutes.getProductById)
.delete(productRoutes.deleteProductById)

// router.get('/:id',(req:Request,res: Response)=>{
//    // productService.load()
//   const product = productService.findById(Number(req.params.id))
//     product ? res.json(product) : res.status(404).json({error:'Not found'})
// })

router.get('/find',(req:Request,res: Response)=>{
   // productService.load()
  const product = productService.findById(Number(req.query.id))
  if(!product){
    res.status(400)
    throw new Error(`product with ${req.query.id} not found`)
  }
  res.status(200).json(product)
   // product ? res.json(product) : res.status(404).json({error:'Not found'})
})

router.post('/',(req:Request,res: Response)=>{
   // productService.load()
  const newProduct:Product =  req.body
  if(!newProduct.name || typeof newProduct.price !== 'number'){
    res.status(404).json({error:'Invalid Product Data'})
  }
  const product = productService.add(newProduct)
    res.status(201).json(product)
})
router.delete('/:id',(req:Request,res: Response)=>{
   // productService.load()
   const success = productService.delete(Number(req.params.id))
    success ? res.json({message:'Deleted'}):  res.status(404).json({error:'Invalid Product Id'})
})


export default router