"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productService_1 = require("../service/productService");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    // productService.load()
    res.json(productService_1.productService.findAll());
});
// router.get('/:id',(req:Request,res: Response)=>{
//    // productService.load()
//   const product = productService.findById(Number(req.params.id))
//     product ? res.json(product) : res.status(404).json({error:'Not found'})
// })
router.get('/find', (req, res) => {
    // productService.load()
    const product = productService_1.productService.findById(Number(req.query.id));
    if (!product) {
        res.status(400);
        throw new Error(`product with ${req.query.id} not found`);
    }
    res.status(200).json(product);
    // product ? res.json(product) : res.status(404).json({error:'Not found'})
});
router.post('/', (req, res) => {
    // productService.load()
    const newProduct = req.body;
    if (!newProduct.name || typeof newProduct.price !== 'number') {
        res.status(404).json({ error: 'Invalid Product Data' });
    }
    const product = productService_1.productService.add(newProduct);
    res.status(201).json(product);
});
router.delete('/:id', (req, res) => {
    // productService.load()
    const success = productService_1.productService.delete(Number(req.params.id));
    success ? res.json({ message: 'Deleted' }) : res.status(404).json({ error: 'Invalid Product Id' });
});
exports.default = router;
