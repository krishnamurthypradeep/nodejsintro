"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const events_1 = require("events");
const readFile = (fileName) => {
    //fs.readFileSync()
    const emitter = new events_1.EventEmitter();
    fs_1.default.readFile(fileName, (err, data) => {
        if (err) {
            return emitter.emit('error', err);
        }
        emitter.emit('data', data);
        emitter.emit('completed', 'completed');
    });
    return emitter;
};
const eventEmitter = readFile('data1');
eventEmitter.on('data', data => console.log(data.toString()))
    .on('error', console.error)
    .on('completed', console.log);
console.log('Outside Readfile');
