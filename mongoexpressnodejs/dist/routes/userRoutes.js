"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userService_1 = __importDefault(require("../service/userService"));
const router = express_1.default.Router();
router.route('/').post(userService_1.default.registerUser);
router.route('/login').post(userService_1.default.loginUser);
exports.default = router;
