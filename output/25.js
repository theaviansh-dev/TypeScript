"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user1 = '12';
user1 = true;
console.log(typeof (user1));
function type(data) {
    console.log(typeof (data));
}
type(true);
class Product {
}
var p1 = new Product();
class View {
}
var v = new View();
function checkDetails(data) {
    if (data instanceof View) {
        console.log('view');
    }
    else {
        console.log('product');
    }
}
checkDetails(p1);
//# sourceMappingURL=25.js.map