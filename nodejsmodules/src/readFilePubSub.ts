import EventEmitter from "events";
//import fs from 'fs'
import http from 'http'

const fs = require('fs')
export default class ReadFilePublisher extends EventEmitter{

    readFile = (fileName: string) => {
        //fs.readFileSync()
    
        fs.readFile(fileName,(err,data)=>{
            if(err){
                return this.emit('error',err)
            }
          this.emit('data',data)
          this.emit('completed','completed')
        })
}
}
