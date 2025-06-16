// global scope
'use strict'
var productName = 'Iphone16'
// scope of variables
// Java, Python, Block Scoping
// Function Scope
function getProductInfo(){
// variable hoisting
// ES 2015 introduces let scope
// let vs var
// var gives us function scoping
// let gives us block scoping
// const gives us block scoping 
  var productName = 'Iphone16 Pro'
  for(let x=0;x<10;x++){
    for(const y=0;y<x;y++){
        console.log(y)
    }
      console.log(x)
  }


}

getProductInfo()
console.log(productName)