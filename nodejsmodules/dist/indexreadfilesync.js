"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const readFile = (fileName) => {
    //fs.readFileSync()
    return fs_1.default.readFileSync(fileName).toString();
};
console.log(readFile('data'));
console.log('Outside Readfile');
