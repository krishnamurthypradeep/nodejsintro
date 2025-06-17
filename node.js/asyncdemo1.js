
const getProductInfo= ()=>{
    setTimeout(()=>{
        console.log('Inside settimeout')
    },0)
}

getProductInfo()
console.log('Outside Timeout')

function foo(x){
    return 2*x
}
function bar(y){
    return foo(y+5) -10
}
console.log(bar(15))
// sync versus async
// Single Threaded
// Event Driven
// Asynchronous Programming