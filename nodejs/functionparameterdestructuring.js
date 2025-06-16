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

const getNameAndPrice = ({name,rating})=> console.log(`${name} has rating ${rating}`)

products.forEach(getNameAndPrice)

const [,,{name:name2}] =products
// console.log(`Product1 name ${name1} and Product2 name ${name2}`)

console.log(` Product3 name ${name2}`)

const [product1] = products

console.log(` Product1 name ${JSON.stringify(product1)}`)

// OOP => class based approach (ES2015)
// OOP => prototype based approach

