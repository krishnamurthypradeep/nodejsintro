"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
const fs = require('fs');
class ReadFilePublisher extends events_1.default {
    constructor() {
        super(...arguments);
        this.readFile = (fileName) => {
            //fs.readFileSync()
            fs.readFile(fileName, (err, data) => {
                if (err) {
                    return this.emit('error', err);
                }
                this.emit('data', data);
                this.emit('completed', 'completed');
            });
        };
    }
}
exports.default = ReadFilePublisher;
