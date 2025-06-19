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
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchAndUpdateProductByName = void 0;
const productSchema_1 = require("../model/productSchema");
const searchAndUpdateProductByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.params;
    const update = req.body;
    const product = yield productSchema_1.Product.findOneAndUpdate({ name }, update, {
        new: true,
        runValidators: true,
    });
    if (!product)
        return res.status(404).json({ message: 'Product not found' });
    return res.json(product);
});
exports.searchAndUpdateProductByName = searchAndUpdateProductByName;
