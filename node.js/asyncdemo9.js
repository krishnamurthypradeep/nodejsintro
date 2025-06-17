const getProductInfo = function(){

    this.product = {name:'Iphone16',price:75564.5}

    // setTimeout(function(){
    //     console.log(this.product)
    // }.bind(this),1000)

     setTimeout(()=>{
        console.log(this.product)
    },1000)
}

getProductInfo()
console.log('Outside getProductInfo')