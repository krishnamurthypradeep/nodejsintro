"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const events_1 = require("events");
const products_1 = __importDefault(require("./data/products"));
const url_1 = require("url");
const fs_1 = __importDefault(require("fs"));
const server = http_1.default.createServer();
let products = [...products_1.default];
const saveProducts = (products) => {
    fs_1.default.writeFileSync('', JSON.stringify(products, null, 2));
};
const id = server.on('request', (req, res) => {
    var _a;
    console.log(`Before parsing ${req.url}`);
    const parsedUrl = (0, url_1.parse)(req.url || '', true);
    console.log(`After parsing ${parsedUrl}`);
    const productId = (_a = parsedUrl.pathname) === null || _a === void 0 ? void 0 : _a.match(/^\/\api\/products\/(\d+)$/);
    // GET
    if (req.url === '/api/products' && req.method === 'GET') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(products_1.default));
    }
    // POST
    else if (req.url === '/api/products' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const newProduct = JSON.parse(body);
                newProduct.id = Date.now;
                products_1.default.push(newProduct);
                res.writeHead(201, { 'content-type': 'application/json' });
                res.end(JSON.stringify(newProduct));
            }
            catch (error) {
                res.writeHead(400, { 'content-type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid product data' }));
            }
        });
    }
    // DELETE
    else if (productId && req.method === 'DELETE') {
        const id = parseInt(productId[1]);
        const length = products_1.default.length;
        products = products.filter(p => p.id !== id);
        try {
            if (products.length == length) {
                res.writeHead(404, { 'content-type': 'application/json' });
                res.end(JSON.stringify({ error: "product Not Found" }));
            }
            else {
                res.writeHead(200, { 'content-type': 'application/json' });
                res.end(JSON.stringify(products));
            }
        }
        catch (error) {
            res.writeHead(4011, { 'content-type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid product data' }));
        }
    }
});
server.listen(8888, () => console.log('Server Started'));
console.log(server instanceof events_1.EventEmitter);
