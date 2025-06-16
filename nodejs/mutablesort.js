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


const sortedProducts = products.sort((p1,p2)=> p2.price -p1.price)

console.log("Sorted Products"+ JSON.stringify(sortedProducts))
console.log("Original Products"+ JSON.stringify(products))
