import http, {IncomingMessage,ServerResponse} from 'http'
import { EventEmitter } from 'events'
const server = http.createServer()
server.on('request',(req:IncomingMessage,res: ServerResponse)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.end('Welcome To world of nodejs')
})

server.listen(8888,()=> console.log('Server Started'))
console.log(server instanceof EventEmitter)