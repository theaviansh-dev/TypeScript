"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Emp {
    _name = 'name';
    get name() {
        return 'MR. ' + this._name;
    }
    set name(val) {
        this._name = 'MR. ' + val;
    }
}
var emp = new Emp();
emp.name = 'avinash';
console.log(emp._name);
//# sourceMappingURL=22.js.map