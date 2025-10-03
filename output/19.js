"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Obj {
    key1() {
        //bydefault public
        return true;
    }
    key2() {
        //only accessable for these
        return true;
    }
    key3() {
        //only for these and extended
        return true;
    }
}
var obj = new Obj();
console.log(obj.key1());
//# sourceMappingURL=19.js.map