"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const readFile = (fileName, cb) => {
    //fs.readFileSync()
    fs_1.default.readFile(fileName, (err, data) => {
        if (err) {
            return cb(err);
        }
        const lines = data.toString().trim().split('\n');
        cb(null, lines);
    });
};
readFile('data', (err, lines) => {
    if (err)
        console.error(err.message);
    console.log(lines);
});
console.log('Outside Readfile');
