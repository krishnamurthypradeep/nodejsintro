import express from 'express'
import productRoutes from './routes/productRoutes'
import userRoutes from './routes/userRoutes'
import { exceptionHandler } from './middleware/exceptionMiddleware'
import connectToDB from './dbConfig/dbConnect'
//import { updateProductByName } from './service/finders'
const app = express()
// (err,req,res,next)
// middleware
app.use(express.json())
connectToDB()
// Route Middleware
// (err:any,req: Request,res:Response,next: nextFunction)

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
//app.use('/api/productsearch', updateProductByName)

app.use(exceptionHandler)

app.listen(3000,()=>{
    console.log('server started')
})