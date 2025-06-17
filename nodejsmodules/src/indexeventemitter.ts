import fs from 'fs'

import { EventEmitter } from 'events'
const readFile = (fileName: string)=> {
    //fs.readFileSync()
    const emitter = new EventEmitter()

    fs.readFile(fileName,(err,data)=>{
        if(err){
            return emitter.emit('error',err)
        }
      emitter.emit('data',data)
      emitter.emit('completed','completed')
    })
    return emitter
}
const eventEmitter = readFile('data1')

eventEmitter.on('data',data => console.log(data.toString()))
.on('error',console.error)
.on('completed',console.log)

console.log('Outside Readfile')