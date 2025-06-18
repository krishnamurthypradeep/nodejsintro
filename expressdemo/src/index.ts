import express from 'express'
import productRoutes from './routes/productRoutes'
import { exceptionHandler } from './middleware/exceptionMiddleware'
const app = express()
// (err,req,res,next)
// middleware
app.use(express.json())
// Route Middleware
// (err:any,req: Request,res:Response,next: nextFunction)

app.use('/api/products',productRoutes)

app.use(exceptionHandler)

app.listen(3000,()=>{
    console.log('server started')
})