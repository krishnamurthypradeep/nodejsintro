
const prices = [1,2,3,4]

const multiplyPrice  = price => price *2

// for(var i=0;i<prices.length;i++){

// }
// map as higher order function
// multiplyPrice is called as callback function

const priceMultipledBytTwo = prices.map(multiplyPrice)
console.log(priceMultipledBytTwo)



