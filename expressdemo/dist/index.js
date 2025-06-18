"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const exceptionMiddleware_1 = require("./middleware/exceptionMiddleware");
const app = (0, express_1.default)();
// (err,req,res,next)
// middleware
app.use(express_1.default.json());
// Route Middleware
// (err:any,req: Request,res:Response,next: nextFunction)
app.use('/api/products', productRoutes_1.default);
app.use(exceptionMiddleware_1.exceptionHandler);
app.listen(3000, () => {
    console.log('server started');
});
