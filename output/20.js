"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Auth {
    login(name, pass) {
        if (name && pass) {
            return true;
        }
        else {
            return false;
        }
    }
}
class One extends Auth {
    result(mark) {
        if (mark > 33) {
            return true;
        }
        else {
            return false;
        }
    }
}
var newOne = new One();
console.log(newOne.login('avinash', 'sharma'));
//# sourceMappingURL=20.js.map