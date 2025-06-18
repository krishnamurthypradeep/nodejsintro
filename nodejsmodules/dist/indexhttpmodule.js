"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const events_1 = require("events");
const server = http_1.default.createServer();
server.on('request', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Welcome To world of nodejs');
});
server.listen(8888, () => console.log('Server Started'));
console.log(server instanceof events_1.EventEmitter);
