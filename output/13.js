"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    var key1 = Number(x);
    var key2 = Number(y);
    const t = key1 + key2;
    if (t.toString() == 'NaN') {
        return false;
    }
    return t;
}
console.log(add(12, '89'));
//# sourceMappingURL=13.js.map