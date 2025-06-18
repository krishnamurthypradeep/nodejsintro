
import EventEmitter from 'events'
import fs from 'fs'
import  zlib  from 'zlib'

const readable  = fs.createReadStream('data')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('data2.txt.gz'))
// const writable  = fs.createWriteStream('data1')
// readable.pipe(writable)

// OutofMemoryError
fs.readFile('data',(err,data)=>{
    if(err){
        return console.error('Read Failed')
    }
    zlib.gzip(data,(err,compressedData)=>{
 if(err){
        return console.error('Read Failed')
    }
    fs.writeFile('data3.txt.gz',compressedData,(err)=>{
        if(err){
         return console.error('Write Failed')
        }
    })

    })
})


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
