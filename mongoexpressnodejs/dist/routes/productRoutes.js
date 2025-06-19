"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productService_1 = __importDefault(require("../service/productService"));
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = (0, express_1.Router)();
//router.put('/updateByName/:name',updateProductByName)
router.route('/').get(productService_1.default.getProducts)
    .post(authMiddleware_1.default, productService_1.default.createProduct);
router.get('/find', productService_1.default.findProductsByPrice);
router.route('/:id').get(productService_1.default.getProductById)
    .delete(productService_1.default.deleteProductById)
    .put(authMiddleware_1.default, productService_1.default.updateProduct);
// OAUTH
// Express as  MVR Patterns
// router.get('/:id',(req:Request,res: Response)=>{
//    // productService.load()
//   const product = productService.findById(Number(req.params.id))
//     product ? res.json(product) : res.status(404).json({error:'Not found'})
// })
exports.default = router;
