"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rectangle_1 = require("./rectangle");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.display = function (shape) {
        console.log("Area of ".concat(shape, " is ").concat(shape.area()));
    };
    return Main;
}());
Main.display(new rectangle_1.default(23.4, 34.5));
