function ClassLogger(constructor:Function) {
    console.group(
        'name '+constructor.name, 
        'length '+ constructor.length,
        // 'arguments '+constructor.arguments,
        // 'caller '+constructor.caller,
        // 'prototype '+constructor.prototype
    );
}

function VariableDetails(target:any, key:any) {
    console.log(key);
}

@ClassLogger
class One {

    @VariableDetails
    value1: number;
    @VariableDetails
    value2: number;

    constructor(x: number, y: number) {
        this.value1 = x;
        this.value2 = y;
    }
}

var c = new One(2, 5);