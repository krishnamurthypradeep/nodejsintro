"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readFilePubSub_1 = __importDefault(require("./readFilePubSub"));
const emitter = new readFilePubSub_1.default();
emitter.on('data', data => console.log(data.toString()))
    .on('error', console.error)
    .on('completed', console.log);
console.log('Outside Readfile');
emitter.readFile('data');
