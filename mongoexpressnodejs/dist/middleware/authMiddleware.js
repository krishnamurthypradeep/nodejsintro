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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userSchema_1 = __importDefault(require("../model/userSchema"));
const protect = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')) {
        try {
            console.log(`before try`);
            token = req.headers.authorization.split(' ')[1];
            console.log(`token ${token}`);
            const decoded = jsonwebtoken_1.default.verify(token, 'admin123');
            console.log(`token ${decoded}`);
            const user = yield userSchema_1.default.findById(decoded.id).select('-password'); // Exclude password
            console.log(`User Details ${user}`);
            if (!user) {
                res.status(401);
                throw new Error('Not Authorized, user not found');
            }
            req.user = user;
            next();
        }
        catch (error) {
            console.error('Jwt verification falied', error.message);
            res.status(401).json({ message: 'Not Authorized, invalid token' });
        }
    }
    else {
        res.status(401).json({ message: 'No token provided' });
    }
});
exports.default = protect;
