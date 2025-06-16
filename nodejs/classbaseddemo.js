// OOP Using Prototype
// Literal Style
// Function Constructor Style
// ES2015 Class Based
// Encapsulaton,Inheritance,Polymorphism
// Abstraction and Interfaces are not supported in javascript

// Abstraction and Interfaces are  supported in typescript

class Product{

    constructor(name,price,rating){
       
        this.name = name
        this.price = price
        this.rating = rating
    }
    getInfo (){
    return `${this.name} costs ${this.price} and the rating id ${this.rating}`
}
}

class CompanyProduct extends Product{
    constructor(name,price,rating,brand,stock){
        super(name,price,rating)
        this.brand = brand
        this.stock = stock
    }
    setStock(units){
        this.stock = units
    }
    setBrand(brandName){
        this.brand = brandName
    }
}
const company= new CompanyProduct('Iphone16Pro',75456.5,'Apple',100)

console.log(company.getInfo())

company.setStock(120)

// function  = Object.setPrototypeof
// extends and super