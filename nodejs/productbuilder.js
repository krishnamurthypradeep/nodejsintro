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

class ProductBuilder{
    constructor(){
        this._name = ''
        this._price = 0.0
        this._rating = 0.0
    }
    set name(value){
        this._name = value
        return this
    }
    set price(value){
        this._price =value
        return this
    }
    set rating(value){
        this._rating = value;
        return this
    }
    build(){
        return new Product(this._name,this._price,this._rating)
    }
}
// const product =
// new ProductBuilder().setName('Iphone16').setPrice(75456.5)
// .setRating(4.7).build()
const builder = new ProductBuilder()
builder.name = 'Ihone16'
builder.price = 75456.5
builder.rating = 4.7
const product = builder.build()
console.log(`Product Built using builder ${product}`)

