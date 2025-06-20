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
const promises_1 = __importDefault(require("fs/promises"));
const readFile = (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    //fs.readFileSync()
    return yield promises_1.default.readFile(fileName);
});
// IIFE
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield readFile('data');
        console.log(data.toString());
    }
    catch (err) {
        const error = err;
        console.error(error.message);
    }
}))();
console.log('Outside Readfile');
