namespace UserSpace {
    export class Auth {
        a:string = "user";
        login() {
            console.log(this.a+' login');
        }

        getList() {
            console.log('list of '+this.a);
        }
    }
}

namespace AdminSpace {
    export class Auth {
        login() {
            console.log('Admin login');
        }

        getList() {
            console.log('list of Admin');
        }
    }
}

var user = new UserSpace.Auth();
user.login();
user.getList();