"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserSpace;
(function (UserSpace) {
    class Auth {
        a = "user";
        login() {
            console.log(this.a + ' login');
        }
        getList() {
            console.log('list of ' + this.a);
        }
    }
    UserSpace.Auth = Auth;
})(UserSpace || (UserSpace = {}));
var AdminSpace;
(function (AdminSpace) {
    class Auth {
        login() {
            console.log('Admin login');
        }
        getList() {
            console.log('list of Admin');
        }
    }
    AdminSpace.Auth = Auth;
})(AdminSpace || (AdminSpace = {}));
var user = new UserSpace.Auth();
user.login();
user.getList();
//# sourceMappingURL=30.js.map