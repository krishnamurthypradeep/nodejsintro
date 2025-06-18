"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const PRODUCT_FILE = path_1.default.join(__dirname, '../../products.json');
let products = [];
const load = () => {
    try {
        const data = fs_1.default.readFileSync(PRODUCT_FILE, 'utf-8');
        products = JSON.parse(data);
    }
    catch (e) {
        console.error(e);
    }
};
const save = () => fs_1.default.writeFileSync(PRODUCT_FILE, JSON.stringify(products, null, 2));
exports.productService = {
    findAll: () => [...products],
    findById: (id) => products.find(p => p.id === id),
    add: (product) => {
        const newProduct = Object.assign(Object.assign({}, product), { id: Date.now() });
        products.push(newProduct);
        save();
        return newProduct;
    },
    delete: (id) => {
        const originalSize = products.length;
        products = products.filter(p => p.id !== id);
        save();
        return products.length !== originalSize;
    }
};
// Load Products from json file on application startup
load();
