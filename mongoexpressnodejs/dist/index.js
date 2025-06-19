"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const exceptionMiddleware_1 = require("./middleware/exceptionMiddleware");
const dbConnect_1 = __importDefault(require("./dbConfig/dbConnect"));
//import { updateProductByName } from './service/finders'
const app = (0, express_1.default)();
// (err,req,res,next)
// middleware
app.use(express_1.default.json());
(0, dbConnect_1.default)();
// Route Middleware
// (err:any,req: Request,res:Response,next: nextFunction)
app.use('/api/products', productRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
//app.use('/api/productsearch', updateProductByName)
app.use(exceptionMiddleware_1.exceptionHandler);
app.listen(3000, () => {
    console.log('server started');
});
