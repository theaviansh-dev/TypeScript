class Auth {
    login(name: string, pass: string): boolean {
        if (name && pass) { return true; }
        else { return false; }
    }
}

class One extends Auth {
    result(mark: number): boolean {
        if (mark > 33) {
            return true;
        } else {
            return false;
        }
    }
}

var newOne = new One();
console.log(newOne.login('avinash', 'sharma'));