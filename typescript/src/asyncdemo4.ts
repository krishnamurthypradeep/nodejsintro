
import Product from "./product"
const products:Product[] = [
    {
        name:'Iphone16',price:75456.5,rating: 4.5

    },
     {
        name:'Oneplus13',price:48456.5,rating: 4.7

    },
     {
        name:'GooglePixel',price:65456.5,rating: 4.6

    }
]

// const filterByPrice = p => p.price >= 60000.0
// const filteredProducts = products.filter(filterByPrice)
// const prices = filteredProducts.map(p => p.price)

const getTotalPrice =(callback: Function): void=>{
setTimeout(()=>{
  const result =  products.filter(p => p.price >= 60000.0)
.map(p => p.price).reduce((prevVal,nextVal) => prevVal+=nextVal)
 callback(result)
},1000)
}

const getResult = function(result){
    console.log(result)
}
getTotalPrice(getResult)
console.log('Ouside filter map reduce')