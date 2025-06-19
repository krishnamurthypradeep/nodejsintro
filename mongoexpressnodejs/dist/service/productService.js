"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productSchema_1 = require("../model/productSchema");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const getProducts = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield productSchema_1.Product.find();
    res.status(200).json(products);
}));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = req.body;
    if (!newProduct.name || typeof newProduct.price !== 'number') {
        res.status(404);
        throw new Error(`Invalid Product ${newProduct.name}`);
    }
    const product = yield productSchema_1.Product.create(newProduct);
    res.status(201).json(product);
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updated = yield productSchema_1.Product.findByIdAndUpdate(req.params.id, Object.assign(Object.assign({}, req.body), { $inc: { __v: 1 } }), {
        new: true,
        runValidators: true,
    });
    updated ? res.json(updated) : res.status(404).json({ message: 'Not Found' });
});
const findProductsByPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { minPrice, maxPrice } = req.query;
    const filter = {};
    if (minPrice || maxPrice)
        filter.price = Object.assign(Object.assign({}, (minPrice ? { $gte: Number(minPrice) } : {})), (maxPrice ? { $lte: Number(maxPrice) } : {}));
    const products = yield productSchema_1.Product.find(filter);
    products ? res.json(products) : res.status(404).json({ message: 'Not Found' });
});
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield productSchema_1.Product.findById(req.params.id);
    if (!products) {
        res.status(400);
        throw new Error(`product with ${req.params.id} not found`);
    }
    res.status(200).json(products);
});
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield productSchema_1.Product.find();
    res.status(200).json(products);
});
exports.default = { getProducts, createProduct, getProductById, deleteProductById, updateProduct, findProductsByPrice };
