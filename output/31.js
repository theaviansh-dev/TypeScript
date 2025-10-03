"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function ClassLogger(constructor) {
    console.group('name ' + constructor.name, 'length ' + constructor.length);
}
function VariableDetails(target, key) {
    console.log(key);
}
let One = class One {
    value1;
    value2;
    constructor(x, y) {
        this.value1 = x;
        this.value2 = y;
    }
};
__decorate([
    VariableDetails
], One.prototype, "value1", void 0);
__decorate([
    VariableDetails
], One.prototype, "value2", void 0);
One = __decorate([
    ClassLogger
], One);
var c = new One(2, 5);
//# sourceMappingURL=31.js.map