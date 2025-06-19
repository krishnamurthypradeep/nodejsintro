"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptionHandler = void 0;
const exceptionHandler = (error, req, res, next) => {
    const statusCode = res.statusCode < 400 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({ message: error.message });
    next();
};
exports.exceptionHandler = exceptionHandler;
// 100-199 => Informational Message
// 200-299 => Sucess
// 300-399 => Redirect
// 400-499 => Client Errors
// 500-599 => Server Side Errors
// const exceptionHandler = (error,
//     req,res,next:)=>{
// }
