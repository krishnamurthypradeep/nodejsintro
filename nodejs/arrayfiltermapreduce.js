const products = [
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

const filterByPrice = p => p.price >= 60000.0
const filteredProducts = products.filter(filterByPrice)
const prices = filteredProducts.map(p => p.price)
//console.log(prices)

// Spread Operator 
for(var i=0;i<prices.length;i++){
    Math.min(prices[i])
}

const minPrice = Math.min(...prices)
const maxPrice = Math.max(...prices)
const averagePrice =
 prices.reduce((prevVal,nextVal) => prevVal+nextVal ,0)/prices.length

// reduce

console.log(typeof filterByPrice)
console.log(`Min Price ${minPrice}`)
console.log(`Max Price ${maxPrice}`)
console.log(`AveragePrice Price ${averagePrice}`)