// No Hoisting

// var value = getProduct()
// console.log(value)
//console.log(getProduct)

// function expression
// fu
var getProduct = function getProduct(){
    console.log('Inside get Product')

}
console.log(typeof getProduct)
getProduct()

// function getProduct(){
//     console.log('Inside get Product')

// }

