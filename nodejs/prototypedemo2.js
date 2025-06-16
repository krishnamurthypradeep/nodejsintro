
let Product ={
    name :'',
    price: 0.0,
    rating:0.0,
    getInfo(){
        return `${this.name} costs ${this.price} and the rating id ${this.rating}`
    }

}

let CompanyProduct = {
    stock: 0,
    brand: '',
    setStock(units){
        this.stock = units
    },
    setBrand(brandName){
        this.brand = brandName
    }
}

Object.setPrototypeOf(CompanyProduct,Product)

CompanyProduct.name = 'Iphone16'
CompanyProduct.price =75456.5
CompanyProduct.setStock(100)
CompanyProduct.setBrand('Apple')

console.log(CompanyProduct.getInfo())
console.log(CompanyProduct.stock)
console.log(CompanyProduct.brand)