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
exports.connectToDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield mongoose_1.default.connect('mongodb+srv://deepumurthy10:ldGlEnLt5grGSQcY@mernstack.aulxrmv.mongodb.net/productsdb?retryWrites=true&w=majority&appName=mernstack');
        console.log(`Connected to mongodb ${conn.connection.host}`);
        return conn;
    }
    catch (error) {
        if (error instanceof Error)
            console.log(`Error Connecting to mongodb ${error.message}`);
        else
            console.log(`Error Connecting to mongodb `);
    }
});
exports.connectToDB = connectToDB;
exports.default = exports.connectToDB;
// let value: unknown = 'something'
// if(typeof value === 'string'){
// }
// //value.something()
