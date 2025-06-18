import {Request,Response,NextFunction} from 'express'

export const exceptionHandler = (error:NodeJS.ErrnoException,
    req: Request,res: Response,next: NextFunction)=>{

      const statusCode = res.statusCode < 400 ? 500: res.statusCode
      res.status(statusCode)
      res.json({message: error.message})  
      next()
}
// 100-199 => Informational Message
// 200-299 => Sucess
// 300-399 => Redirect
// 400-499 => Client Errors
// 500-599 => Server Side Errors
// const exceptionHandler = (error,
//     req,res,next:)=>{

// }