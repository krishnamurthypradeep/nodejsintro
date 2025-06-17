
const products = null
// const products = [
//     {
//         name:'Iphone16',price:75456.5,rating: 4.5

//     },
//      {
//         name:'Oneplus13',price:48456.5,rating: 4.7

//     },
//      {
//         name:'GooglePixel',price:65456.5,rating: 4.6

//     }
// ]

// const filterByPrice = p => p.price >= 60000.0
// const filteredProducts = products.filter(filterByPrice)
// const prices = filteredProducts.map(p => p.price)

const getTotalPrice =()=>{
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    if(products){
  const result =  products.filter(p => p.price >= 60000.0)
.map(p => p.price).reduce((prevVal,nextVal) => prevVal+=nextVal)
 resolve(result)
    }else {
      reject('Products is null')
    }
},1000)
})
}

const promise = getTotalPrice()
// promise class has 3 functions then(), catch() & finally()
promise.then(result => {console.log(result)})
.catch(reason => {console.error(reason)})

// promise.catch(reason => console.error(reason))

//console.log(`Output of filter map reduce ${output}`)
console.log('Ouside filter map reduce')