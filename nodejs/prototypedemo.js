function Product(name,price,rating){
    this.name = name
    this.price = price
    this.rating = rating
}

Product.prototype.getInfo = function(){
    return `${this.name} costs ${this.price} and the rating id ${this.rating}`
}

function CompanyProduct(name,price,brand,stock){
    Product.call(this,name,price)
    this.brand = brand
    this.stock = stock
}

// Inherit Products prototype into CompanyProduct prototype
CompanyProduct.prototype = Object.create(Product.prototype)

CompanyProduct.prototype.setStock = function(units){
    this.stock = units
}
CompanyProduct.prototype.setBrand = function(brandName){
    this.brand = brandName
}

const company= new CompanyProduct('Iphone16Pro',75456.5,'Apple',100)

console.log(company.getInfo())

console.log(company.setStock(120))