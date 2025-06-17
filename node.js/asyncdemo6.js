// JavaScript and TypeScript
// import fs from 'fs'
// Node.JS (CommonJS)
const fs = require('fs')

fs.readFile(__filename,()=>{
    setTimeout(()=>{
        console.log('timeout')
    },0)

setImmediate(()=>{
    console.log('Set Immediate')
})
})


