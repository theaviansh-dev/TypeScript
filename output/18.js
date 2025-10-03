"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    name;
    price;
    pId;
    inOrder = false;
    constructor(name, price, pId) {
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    addToCart() {
        this.inOrder = true;
    }
    chekOut() {
        if (this.inOrder) {
            return `product name ${this.name} ordered for the price of ${this.price}`;
        }
        else {
            return 'no product found';
        }
    }
}
var product = new Product('car', 1000, 123);
product.addToCart();
console.log(product.chekOut());
//# sourceMappingURL=18.js.map