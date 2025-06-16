// const getProduct = function(productName){
//     return 'Getting Product Info '+productName
// }

// Arrow Functions  similar to lambdas


const getProduct = (productName) => 'Getting Product Info '+productName

console.log(getProduct('Iphone16'))


// side effects 
// 1. Changing or mutating the input
// 2. Make Network Calls (rest api calls)
// 3. Reading from a global state

// A Pure Function is sideeffect free