function one<T>(data:T):T{
    //return same data types
    return data;
}

let One = one(1);
let Two = one("1");
let Three = one(true);
let Four = one([1, 'hi']);