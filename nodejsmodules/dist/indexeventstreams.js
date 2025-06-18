"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const zlib_1 = __importDefault(require("zlib"));
const readable = fs_1.default.createReadStream('data')
    .pipe(zlib_1.default.createGzip())
    .pipe(fs_1.default.createWriteStream('data2.txt.gz'));
// const writable  = fs.createWriteStream('data1')
// readable.pipe(writable)
// OutofMemoryError
fs_1.default.readFile('data', (err, data) => {
    if (err) {
        return console.error('Read Failed');
    }
    zlib_1.default.gzip(data, (err, compressedData) => {
        if (err) {
            return console.error('Read Failed');
        }
        fs_1.default.writeFile('data3.txt.gz', compressedData, (err) => {
            if (err) {
                return console.error('Write Failed');
            }
        });
    });
});
// Flowing Mode (push) -> Data is pushed automatically the moment it is available
// we recieve the data using the data event
// readable.on('data',chunk => console.log(chunk.toString()))
// readable.on('end',() => console.log('end'))
// readable.on('error',reason => console.error(reason))
// console.log(readable instanceof EventEmitter)
// Non Flowing Mode
// manually pull data using read()
// readable.on('readable',()=>{
//     let chunk
//     while((chunk = readable.read())!=null){
//         console.log(`File Contents ${chunk.toString()}`)
//     }
// })
