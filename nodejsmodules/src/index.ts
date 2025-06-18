import http, {IncomingMessage,ServerResponse} from 'http'
import { EventEmitter } from 'events'
import myproducts from './data/products'
import {parse} from 'url'
import { Product } from './model/product'
import fs from 'fs'
const server = http.createServer()
let products  = [...myproducts]

const saveProducts = (products:Product[])=>{
    fs.writeFileSync('',JSON.stringify(products,null,2))
}

// GET /api/products?id=1&sort=ASC
// {pathName:/api/products, query:{id:1,sort:'ASC}}
const id = 
server.on('request',(req:IncomingMessage,res: ServerResponse)=>{
    console.log(`Before parsing ${req.url}`)
    const parsedUrl = parse(req.url || '',true)
        console.log(`After parsing ${parsedUrl}`)
   const productId = parsedUrl.pathname?.match(/^\/\api\/products\/(\d+)$/)
    // GET
    if(req.url === '/api/products' && req.method === 'GET'){
         res.writeHead(200,{'content-type':'application/json'})
         res.end(JSON.stringify(myproducts))
    }
    // POST
    else if(req.url === '/api/products' && req.method === 'POST'){
        let body = ''
        req.on('data',chunk => body+= chunk)
        req.on('end',()=>{
            try {
                const newProduct = JSON.parse(body)
                newProduct.id = Date.now
                myproducts.push(newProduct)
        res.writeHead(201,{'content-type':'application/json'})
         res.end(JSON.stringify(newProduct))
            } catch (error) {
                res.writeHead(400,{'content-type':'application/json'})
         res.end(JSON.stringify({error:'Invalid product data'}))
            }
        })
        
    }
// DELETE
    else if(productId && req.method === 'DELETE'){
       const id = parseInt(productId[1])
       const length = myproducts.length
       products = products.filter(p => p.id !== id )
       
            try {
                if(products.length == length){
        res.writeHead(404,{'content-type':'application/json'})
         res.end(JSON.stringify({error: "product Not Found"}))
                }
                else{
 res.writeHead(200,{'content-type':'application/json'})
         res.end(JSON.stringify(products))
                }
            } catch (error) {
                res.writeHead(4011,{'content-type':'application/json'})
         res.end(JSON.stringify({error:'Invalid product data'}))
            }
        }
        })
        
  

// Java -> SpringMVC (REST API's) (JSP | Thymeleaf)
// Python -> Django | Flask (jinja2)
// Nodes.JS -> Express RESTAPI | (EJS | Handlebars)

server.listen(8888,()=> console.log('Server Started'))
console.log(server instanceof EventEmitter)

// express.get('/',(req,res)=>{
//})

// express.post('/',(req,res)=>{
//})

// express.put('/',(req,res)=>{
//})
// express.patch('/',(req,res)=>{
//})
// express.delete('/',(req,res)=>{
//})