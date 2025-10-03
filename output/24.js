"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Com {
    name = 'google'; //non static method
    static rollno = 12; //static mehtod
}
var c1 = new Com();
console.log(c1.name); //for non static method
console.log(Com.rollno); //for static method
//# sourceMappingURL=24.js.map