class Emp {
    _name: string = 'name';
    get name(): string {
        return 'MR. ' + this._name;
    }
    set name(val: string) {
        this._name = 'MR. ' + val;
    }
}

var emp = new Emp();
emp.name = 'avinash';
console.log(emp._name);