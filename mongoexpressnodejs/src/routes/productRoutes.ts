import express , {Request,Response,Router } from 'express'
import productRoutes from '../service/productService'


import protect from '../middleware/authMiddleware'
const router = Router()

//router.put('/updateByName/:name',updateProductByName)

router.route('/').get(productRoutes.getProducts)
.post(protect,productRoutes.createProduct)

router.get('/find',productRoutes.findProductsByPrice)


router.route('/:id').get(productRoutes.getProductById)
.delete(productRoutes.deleteProductById)
.put(protect,productRoutes.updateProduct)

// OAUTH

// Express as  MVR Patterns

// router.get('/:id',(req:Request,res: Response)=>{
//    // productService.load()
//   const product = productService.findById(Number(req.params.id))
//     product ? res.json(product) : res.status(404).json({error:'Not found'})
// })




export default router

// FunctionalProgramming & Object Based 
// Class Based 
// Nest.JS -> Nest CLI
// Dependency Injection