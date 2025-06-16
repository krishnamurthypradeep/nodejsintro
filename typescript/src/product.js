var Product = /** @class */ (function () {
    function Product(name, price, rating) {
        this.name = name;
        this.price = price;
        this.rating = rating;
    }
    Product.prototype.getInfo = function () {
        return "".concat(this.name, " costs ").concat(this.price, " and the rating id ").concat(this.rating);
    };
    return Product;
}());
// ECMA understands javascript
// typescript is from microsoft
// .ts
// transpiler
// .js
// dart
// coffeescript
