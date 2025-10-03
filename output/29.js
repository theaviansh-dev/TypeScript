"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//partial give use freedom to apply stc's key partially i.e. not each madetory
let one = {
    name: 'xyz',
    stablishIn: 1978,
    city: 'gkp'
};
//required makes all fields mendatory
let two = {
    name: 'xyz',
    stablishIn: 1989,
    city: 'lko',
    contacts: {
        phone: 9026903770,
        email: 'as'
    }
};
//readonly make it readonly
let three = {
    name: 'xyz',
    stablishIn: 1990,
    city: 'alwar'
};
//select one to use
let four = {
    name: 'xyz', city: 'xyz'
};
//select one to leave
let five = {
    city: 'xyz',
    stablishIn: 1900
};
let seven = "pending"; //error can't be assign in this variable
let eight = "loading"; //anly error or loading can be assingable
var nine = 'hello'; //null can be assignable
//it makes each option an onject's key
let ten = {
    loading: true,
    pending: false,
    error: false,
    success: true
};
//# sourceMappingURL=29.js.map