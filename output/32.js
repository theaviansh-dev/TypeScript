"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function Override(target, key, descriptor) {
    descriptor.value = function Key1(x, y) {
        return 'answer is ' + Number(x + y);
    };
}
class One {
    Key1(x, y) {
        return x + y;
    }
}
__decorate([
    Override //override an functon
], One.prototype, "Key1", null);
var o = new One();
console.log(o.Key1(2, 3));
//# sourceMappingURL=32.js.map