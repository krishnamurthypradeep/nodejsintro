
const outer1 = function(x){
    return function(y){
        return x+y
    }
}

// Arrow Functions
const outer = x => y => x+y

const returnFn = outer(25)
const result = returnFn(25)
console.log(result)
// console.log(outer(25,25))

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

const sortProducts = (field,ascending=true) => (p1,p2) => {

    const result = p1[field] > p2[field] ? 1 : (p1[field] < p2[field]? -1: 0)
    return ascending ? result : -result

}

const byPrice = products.slice().sort(sortProducts('price',false))

const byRating = products.slice().sort(sortProducts('rating'))

console.log(byPrice)
console.log(byRating)

// filter  

// map 





