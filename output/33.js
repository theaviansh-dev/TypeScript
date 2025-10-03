"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//simple promise example
function one() {
    return new Promise((res) => {
        setTimeout(() => {
            res('functio 1');
        }, 2000);
    });
}
one().then((data) => {
    console.log(data), two();
});
function two() {
    console.log('function 2');
}
function One() {
    return new Promise((res) => {
        setTimeout(() => {
            res({ name: 'xyz', age: 21, city: 'gkp' });
        }, 2000);
    });
}
One().then((data) => {
    console.log(data), Two();
});
function Two() {
    console.log('function 2');
}
//# sourceMappingURL=33.js.map