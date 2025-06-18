import fs from 'fs'
import path from 'path'

import { Product } from '../model/product'
const PRODUCT_FILE = path.join(__dirname,'../../products.json')
let products: Product[] = []
const load = () =>{
    try {
        const data = fs.readFileSync(PRODUCT_FILE,'utf-8')
        products = JSON.parse(data)
    } catch (e) {
       console.error(e)
    }
}
const save = () => fs.writeFileSync(PRODUCT_FILE,JSON.stringify(products,null,2))

export const productService = {
   
    findAll : () => [...products],
    findById: (id: number) => products.find(p => p.id === id),
    add: (product:Omit<Product,'id'>) =>{
        const newProduct:Product = {...product, id: Date.now()}
        products.push(newProduct)
        save()
        return newProduct

    },
    delete:(id: number) =>{
        const originalSize = products.length
        products = products.filter(p => p.id !== id)
        save()
        return products.length !== originalSize
    }

}
// Load Products from json file on application startup
load()